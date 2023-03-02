export const TRANSACTION_TEST_DATA = {
  _id: '63abb2368467fa07f109d492',
  policy: {
    pol_eff_date: {
      day: 29,
      month: 12,
      year: 2022,
      date: '2022-12-29T00:00:00.000Z',
    },
    pol_exp_date: {
      day: 29,
      month: 12,
      year: 2023,
      date: '2023-12-29T23:59:59.000Z',
    },
    policy_number: 'SKY-4865911-00',
    binder_number: null,
    status: 'Cancelled',
    renewal_count: 0,
    pol_bind_date: {
      day: 4,
      month: 1,
      year: 2023,
      date: '2023-01-04T00:00:00.000Z',
    },
    cancelation_eff_date: {
      date: '2023-02-25T07:00:00.000Z',
      year: 2023,
      month: 2,
      day: 25,
    },
    pol_termination_date: {
      date: '2023-02-25T07:00:00.000Z',
      year: 2023,
      month: 2,
      day: 25,
    },
  },
  status: 'Active',
  owner: {
    account_id: '62210d2630652cd01506b0ac',
    users: [
      {
        title: 'Producer',
        status: 'Active',
        user: '6229690373ef8a20ddda1cce',
        _id: '63abb2368467fa07f109d494',
      },
    ],
  },
  rating: [
    {
      rate_schedule: '6229866307c7d3e5ef40aa43',
      rate_schedule_owner: {
        account_id: '62210d2630652cd01506b0ac',
        users: [],
      },
      rate_adjustments: [
        {
          factor_title: ['Adjust Rate'],
          rate_factors: [
            {
              _id: '638b529e51547ab1aabf3625',
              title: 'Accident/Violation 0/0 ',
            },
            {
              _id: '638b52a351547ab1aabf36ea',
              title: 'Violation/Accident 1/1',
            },
          ],
          rate_type: 'Factor',
          rate: 0.85,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 7225,
          previous_quote_pure_premium_per_unit: 8500,
          error: { message: null, error: null },
          total_counted: 1,
          count: 1,
          evaluation_factors: [
            {
              pass: false,
              data: [
                {
                  custom_field: 'accident_at_fault',
                  value: 0,
                  final_value: 0,
                  pass: false,
                  junction: 'And',
                  _id: '63abb2508467fa07f109d9e7',
                },
                {
                  custom_field: 'minor_violations',
                  value: 0,
                  final_value: 0,
                  pass: false,
                  junction: null,
                  _id: '63abb2508467fa07f109d9e8',
                },
              ],
              _id: '63abb2508467fa07f109d9e6',
            },
          ],
          actions: ['Adjust Rate'],
          _id: '63abb2508467fa07f109d9e5',
        },
        {
          factor_title: ['Adjust Rate'],
          rate_factors: [
            {
              _id: '63924e35f678d87709270353',
              title: 'Radius Less than 1000',
            },
          ],
          rate_type: 'Factor',
          rate: 1,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 7225,
          previous_quote_pure_premium_per_unit: 7225,
          error: { message: null, error: null },
          total_counted: 1,
          count: 1,
          evaluation_factors: [
            {
              pass: false,
              data: [
                {
                  custom_field: 'radius',
                  value: 150,
                  final_value: 150,
                  pass: false,
                  junction: null,
                  _id: '63abb2508467fa07f109d9eb',
                },
              ],
              _id: '63abb2508467fa07f109d9ea',
            },
          ],
          actions: ['Adjust Rate'],
          _id: '63abb2508467fa07f109d9e9',
        },
        {
          factor_title: ['Adjust Rate'],
          rate_factors: [
            { _id: '639253ec69184d4b2a4b6233', title: '# of employees > 0' },
          ],
          rate_type: 'Factor',
          rate: 1,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 7225,
          previous_quote_pure_premium_per_unit: 7225,
          error: { message: null, error: null },
          total_counted: 1,
          count: 1,
          evaluation_factors: [
            {
              pass: false,
              data: [
                {
                  custom_field: 'number_of_employees',
                  value: 45,
                  final_value: 45,
                  pass: false,
                  junction: null,
                  _id: '63abb2508467fa07f109d9ee',
                },
              ],
              _id: '63abb2508467fa07f109d9ed',
            },
          ],
          actions: ['Adjust Rate'],
          _id: '63abb2508467fa07f109d9ec',
        },
        {
          factor_title: ['Adjust Rate'],
          rate_factors: [
            {
              _id: '6392ab95c7ac386f13b0f8bc',
              title: 'Speed Gauge DOT Score',
            },
          ],
          rate_type: 'Percentage',
          rate: 1.1,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 7304.48,
          previous_quote_pure_premium_per_unit: 7225,
          error: { message: null, error: null },
          total_counted: 1,
          count: 1,
          evaluation_factors: [
            {
              pass: false,
              data: [
                {
                  custom_field: 'speed_gauge_dot_score',
                  value: 650,
                  final_value: 650,
                  pass: false,
                  junction: null,
                  _id: '63abb2508467fa07f109d9f1',
                },
              ],
              _id: '63abb2508467fa07f109d9f0',
            },
          ],
          actions: ['Adjust Rate'],
          _id: '63abb2508467fa07f109d9ef',
        },
        {
          factor_title: [],
          rate_factors: [{ _id: null, title: 'Limit Selection 1000000' }],
          rate_type: 'Factor',
          rate: 1.1,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 8034.93,
          previous_quote_pure_premium_per_unit: 7304.48,
          error: { message: null, error: null },
          total_counted: null,
          count: null,
          evaluation_factors: [],
          actions: [],
          _id: '63abb2508467fa07f109d9f2',
        },
        {
          factor_title: [],
          rate_factors: [{ _id: null, title: 'Deductible Selection 1500' }],
          rate_type: 'Factor',
          rate: 1.15,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 9240.17,
          previous_quote_pure_premium_per_unit: 8034.93,
          error: { message: null, error: null },
          total_counted: null,
          count: null,
          evaluation_factors: [],
          actions: [],
          _id: '63abb2508467fa07f109d9f3',
        },
        {
          factor_title: [],
          rate_factors: [{ _id: null, title: 'Rate minimum applied 10000' }],
          rate_type: 'Flat Rate',
          rate: 10000,
          rate_application: 'On Policy',
          quote_pure_premium_per_unit: 10000,
          previous_quote_pure_premium_per_unit: 10000,
          error: { message: null, error: null },
          total_counted: null,
          count: null,
          evaluation_factors: [],
          actions: [],
          _id: '63abb2508467fa07f109d9f4',
        },
      ],
      coverage_options: [
        {
          title: 'Hired Autos',
          option_id: '6393ba4467fb1e2800a772c9',
          option: {
            limit: '1000',
            split_limit: null,
            rate_type: 'Flat Rate',
            rate: 1000,
            rate_application: 'On Policy',
            rating_factor: '62cc4fa6140cc1f9dde0cb6e',
            selector: 'Is In Between',
            inputs: [
              { value: 0, _id: '6393ba4467fb1e2800a772ca' },
              { value: 1, _id: '6393ba4467fb1e2800a772cb' },
            ],
            is_default: false,
          },
          selected: false,
          rate: 1000,
          rate_type: 'Flat Rate',
          rate_application: 'On Policy',
          rate_application_count: 1,
          total: 25.2505,
          _id: '63abb2508467fa07f109d9f5',
        },
        {
          title: 'Non Owned',
          option_id: '63332fbd72405f268828a9fa',
          option: {
            limit: '1000',
            rate_type: 'Flat Rate',
            rate: 136,
            rate_application: 'On Policy',
            rating_factor: '62bfae99f6340dfa3e57b55f',
            selector: 'Is In Between',
            inputs: [
              { value: 1, _id: '63332fbd72405f268828a9fb' },
              { value: 125, _id: '63332fbd72405f268828a9fc' },
            ],
            is_default: false,
          },
          selected: false,
          rate: 136,
          rate_type: 'Flat Rate',
          rate_application: 'On Policy',
          rate_application_count: 1,
          total: 3.4341,
          _id: '63abb2508467fa07f109d9f8',
        },
      ],
      fees: [
        {
          name: 'Policy',
          rate_type: 'Percentage',
          rate: 6,
          earned: 'Accrued',
          tax_exempt: false,
          rate_application: 'On Policy',
          required: true,
          selected: true,
          total: 15.1503,
          _id: '623858d33f04363fae678834',
        },
        {
          name: 'Technology',
          rate_type: 'Flat Rate',
          rate: 150,
          earned: 'Fully Earned',
          tax_exempt: false,
          rate_application: 'On Policy',
          required: true,
          selected: true,
          total: 3.7876,
          _id: '62ee7aa332b6553af294ce16',
        },
        {
          name: 'Safety Fee',
          rate_type: 'Flat Rate',
          rate: 180,
          earned: 'Fully Earned',
          tax_exempt: false,
          rate_application: 'On Policy',
          required: false,
          selected: true,
          total: 4.5451,
          _id: '63abb2508467fa07f109d9fd',
        },
      ],
      taxes: [],
      quote_units: 1,
      quote_pure_premium_per_unit: 10000,
      quote_pure_premium: 252.5052,
      quote_coverage_premiums: 0,
      quote_coverage_total_premium: 252.5052,
      total_fees: 23.483,
      total_taxable_premium: 252.5052,
      total_taxes: 0,
      total_premium_per_unit: 10930,
      total_premium: 275.9881,
      credits: [],
      admin_locked: false,
      _id: '63abb2368467fa07f109d493',
    },
  ],
  quote_status: 'Bound',
  premium: {
    quote_pure_premium_per_unit: 10000,
    quote_pure_premium: 252.5052,
    quote_coverage_premiums: 0,
    quote_coverage_total_premium: 252.5052,
    total_fees: 23.482999999999997,
    total_earned_premium: 8.332699999999999,
    total_taxable_premium: 252.5052,
    total_taxes: 0,
    total_premium_per_unit: 10930,
    total_premium: 275.9881,
  },
  dot: {
    census: null,
    dot_number: '456798',
    mc_number: '34657890',
    legal_name: 'A&K EARTH MOVERS INC',
    tax_id: '2345678y7',
    traveling: 'Interstate',
    dba_name: '',
    telephone: '324657876',
    number_of_employees: 45,
    email_address: 'a@k.com',
    radius: 150,
    company_start_date: {
      date: '1991-07-03T00:00:00.000Z',
      year: 1991,
      month: 7,
      day: 3,
    },
    garage_address: {
      street: 'N Kristy Ave',
      street_2: null,
      city: 'Kuna',
      state: 'ID',
      code: '83634',
      country: 'US',
    },
    mailing_address: {
      street: 'N Kristy Ave',
      street_2: null,
      city: 'Kuna',
      state: 'ID',
      code: '83634',
      country: 'US',
    },
    filings: [
      { authority: 'Federal', number: null, _id: '63abb2368467fa07f109d495' },
    ],
    documents: null,
    additional_insureds: [],
    data: { speed_gauge_dot_score: 650 },
  },
  power_units: [
    {
      vin: '3AKJHHDR8JSJT2974',
      unit_type: 'Truck',
      year: 2018,
      make: 'FREIGHTLINER',
      model: 'Cascadia',
      owned: true,
      listed: true,
      included: true,
      grwv: 33001,
      total_insured_value: null,
      documents: [],
      _id: '63abb2238467fa07f109d2fb',
    },
  ],
  drivers: [
    {
      profile: {
        first_name: 'T',
        last_name: 'gvkh',
        gender: 'Male',
        date_of_birth: {
          date: '1955-09-04T00:00:00.000Z',
          year: 1955,
          month: 9,
          day: 4,
        },
        phone: null,
        marital_status: null,
      },
      hire_date: {
        date: '2022-12-24T00:00:00.000Z',
        year: 2022,
        month: 12,
        day: 24,
      },
      experience_date: {
        date: '2022-12-07T00:00:00.000Z',
        year: 2022,
        month: 12,
        day: 7,
      },
      dl_number: '8765432',
      dl_state: 'CT',
      included: true,
      listed: true,
      minor_violations: 0,
      major_violations: 0,
      accident_at_fault: 0,
      accident_not_at_fault: 0,

      _id: '63abb2188467fa07f109d2f6',
    },
  ],
  transactions: {
    transaction: 'New Business',
    eff_date: {
      date: '2023-01-04T00:00:00.000Z',
      year: 2023,
      month: 1,
      day: 4,
    },
    premium: {
      quote_pure_premium_per_unit: 10000,
      quote_pure_premium: 10000,
      quote_coverage_premiums: 0,
      quote_coverage_total_premium: 10000,
      total_fees: 930,
      total_taxable_premium: 10000,
      total_taxes: 0,
      total_earned_premium: 330,
      total_premium_per_unit: 10930,
      total_premium: 10930,
    },
    object_id: '63abb2368467fa07f109d492',
    created_at: '2023-01-05T03:10:06.598Z',
    _id: '63b7184f350417ba8c48bfae',
  },
  changes: null,
  commision: 1800,
  net_payment: 8200,
  earned_premium: 10000,
};
