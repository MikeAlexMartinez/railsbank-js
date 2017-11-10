const user = { 
  enduser_id: '5a0300d0-1b24-4b7c-9141-b04213c88cf4',
  ledger_id: '5a0305e1-2018-4751-925b-3e5bc7a0f7a1',
  account: {
    iban: 'SK4500000451510172360726',
    ledger_primary_use_types: [ 'ledger-primary-use-types-payments' ],
    ledger_id: '5a0305e1-2018-4751-925b-3e5bc7a0f7a1',
    ledger_holder: { enduser_id: '5a0300d0-1b24-4b7c-9141-b04213c88cf4' },
    ledger_who_owns_assets: 'ledger-assets-owned-by-me',
    partner_ref: 'examplebank',
    partner_id: '58fe2ce0-3def-4e08-b778-c121c7f98334',
    ledger_t_and_cs_country_of_jurisdiction: 'GB',
    bic_swift: 'SPSRSKBA',
    ledger_status: 'ledger-status-ok',
    amount: 0,
    partner_product: 'ExampleBank-EUR-1',
    partner: { 
      partner_id: '58fe2ce0-3def-4e08-b778-c121c7f98334',
      company: { name: 'Example Bank' },
      partner_ref: 'examplebank' 
    },
    ledger_iban_status: 'ledger-iban-status-ok',
    asset_type: 'eur',
    asset_class: 'currency',
    ledger_type: 'ledger-type-single-user'
  },
  beneficiaries: [
    {
      "beneficiary_id": '5a03f951-4cf7-420a-9bba-57d3c135a5a1',
      "holder_id": "5a0300d0-1b24-4b7c-9141-b04213c88cf4",
      "asset_class": "currency",
      "asset_type": "eur",
      "iban": "SK6600000461510209016148",
      "bic_swift": "SPSRSKBA",
      "person": {
        "name": "Bob",
        "email": "bob@example.net",
        "date_of_birth": "1981-02-03",
        "telephone": "0012345678912",
        "address": {
          "address_iso_country": "FRA"
          },
        "nationality": [
          "Swiss"
          ],
        "country_of_residence": [
          "FRA"
          ]
      }
    }
  ],
  transactions: [
    "5a03fce2-7b73-42e7-8604-98f917659d56",
  ]
};

const user2 = { 
  enduser_id: '5a030128-84c9-4c14-893c-43ebc5de6eb1',
  ledger_id: '5a03f5b4-7d4c-4772-8193-0d8f9949a8b7',
  account: { 
    iban: 'SK6600000461510209016148',
    ledger_primary_use_types: [ 'ledger-primary-use-types-payments' ],
    ledger_id: '5a03f5b4-7d4c-4772-8193-0d8f9949a8b7',
    ledger_holder: { enduser_id: '5a030128-84c9-4c14-893c-43ebc5de6eb1' },
    ledger_who_owns_assets: 'ledger-assets-owned-by-me',
    partner_ref: 'examplebank',
    partner_id: '58fe2ce0-3def-4e08-b778-c121c7f98334',
    ledger_t_and_cs_country_of_jurisdiction: 'GB',
    bic_swift: 'SPSRSKBA',
    ledger_status: 'ledger-status-ok',
    amount: 0,
    partner_product: 'ExampleBank-EUR-1',
    partner:{ 
      partner_id: '58fe2ce0-3def-4e08-b778-c121c7f98334',
      company: { name: 'Example Bank' },
      partner_ref: 'examplebank' 
    },
    ledger_iban_status: 'ledger-iban-status-ok',
    asset_type: 'eur',
    asset_class: 'currency',
    ledger_type: 'ledger-type-single-user' 
  }
};

const me = {
  person: {
    "name": "Michael Martinez",
    "email": "mike@me.net",
    "date_of_birth": "1987-10-05",
    "telephone": "+44 22 626 2626",
    "address": {
      "address_refinement": "Apartment 42",
      "address_number": "29",
      "address_street": "Acacia Road",
      "address_city": "Nuttytown",
      "address_postal_code": "FX20 7XS",
      "address_iso_country": "GBR"
      },
    "address_history": [
      {
        "address_refinement": "Apartment 77",
        "address_number": "42",
        "address_street": "Kirschbaumstraße",
        "address_city": "Berlin",
        "address_postal_code": "12059",
        "address_iso_country": "DE",
        "address_start_date": "2000-09-02",
        "address_end_date": "2002-12-20"
      }
    ],
    "nationality": [
      "British"
    ],
    "country_of_residence": [
      "GBR"
    ],
    "date_onboarded": "2017-11-09"
  },
  "enduser_meta": {
    "foo": "baa",
    "our_salesforce_reference": "http://na1.salesforce.com/5003000000D8cuI"
  },
  enduser_id: '5a0447f9-f3f7-4551-bb13-0795692fec1c',
}


module.exports = {
  user1: user,
  user2: user2,
  me: me,
};
