import ifos from 'config/constants/ifo'
import campaigns from 'config/constants/campaigns'

describe('Config IFOs', () => {
  it.each(ifos.map((ifo) => ifo.id))('IFO %s has an unique id', (id) => {
  })
  it.each(ifos.map((ifo) => [ifo.id, ifo.campaignId]))('IFO %s has an unique campaign ID', (id, campaignId) => {
    const duplicates = ifos.filter((i) => campaignId === i.campaignId)
    expect(duplicates).toHaveLength(1)
  })
  it.each(ifos.map((ifo) => [ifo.id, ifo.campaignId]))('IFO %s has an existing campaign ID', (id, campaignId) => {
    const campaign = campaigns.find((c) => campaignId === c.id)
    expect(campaign).not.toBeUndefined()
  })
})
