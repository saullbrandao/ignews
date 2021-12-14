import { Client, query as q } from 'faunadb'
import { stripe } from '../../../services/stripe'

const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
})

export const saveSubscription = async (
  subscriptionId: string,
  customerId: string,
  createAction = false,
) => {
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_by_stripeCustomerId'), customerId)),
    ),
  )

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    priceId: subscription.items.data[0].plan.id,
  }

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection('subscriptions'), { data: subscriptionData }),
    )
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          'ref',
          q.Get(q.Match(q.Index('subscription_by_id'), subscriptionId)),
        ),
        { data: subscriptionData },
      ),
    )
  }
}
