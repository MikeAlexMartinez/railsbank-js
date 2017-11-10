

module.exports = EndUser(user) {


    this.person = {
        "name": user.name || "test_user",
        "email": `test@example.net`,
        "date_of_birth": "1970-11-05",
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
            "Czech"
        ],
        "country_of_residence": [
            "GBR"
        ],
        "date_onboarded": "2015-11-21"
        },
        "enduser_meta": {
        "foo": "baa",
        "our_salesforce_reference": "http://na1.salesforce.com/5003000000D8cuI"
        }
    }
}

"person": {
    "name": "Eric Wimp",
    "email": "bananaman@example.net",
    "date_of_birth": "1970-11-05",
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
      "Czech"
    ],
    "country_of_residence": [
      "GBR"
    ],
    "date_onboarded": "2015-11-21"
  },
   "enduser_meta": {
    "foo": "baa",
   "our_salesforce_reference": "http://na1.salesforce.com/5003000000D8cuI"
  }
}