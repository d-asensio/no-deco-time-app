/**
 * Bühlmann ZH-L16C values for theoretical tissue compartments.
 *
 * For convenience, the term k is pre-computed. It stands for ln(2)/half-time.
 */
const compartments = [
  {
    id: '1',
    nitrogen: {
      halfTime: 4,
      k: 0.17328679513998632,
      a: 1.2599,
      b: 0.524
    },
    helium: {
      halfTime: 1.51,
      k: 0.45903786792049356,
      a: 1.7424,
      b: 0.4245
    }
  },
  {
    id: '1b',
    nitrogen: {
      halfTime: 5,
      k: 0.13862943611198905,
      a: 1.1696,
      b: 0.5578
    },
    helium: {
      halfTime: 1.88,
      k: 0.36869530880848156,
      a: 1.6189,
      b: 0.477
    }
  },
  {
    id: '2',
    nitrogen: {
      halfTime: 8,
      k: 0.08664339756999316,
      a: 1,
      b: 0.6514
    },
    helium: {
      halfTime: 3.02,
      k: 0.22951893396024678,
      a: 1.383,
      b: 0.5747
    }
  },
  {
    id: '3',
    nitrogen: {
      halfTime: 12.5,
      k: 0.055451774444795626,
      a: 0.8618,
      b: 0.7222
    },
    helium: {
      halfTime: 4.72,
      k: 0.1468532162203274,
      a: 1.1919,
      b: 0.6527
    }
  },
  {
    id: '4',
    nitrogen: {
      halfTime: 18.5,
      k: 0.037467415165402446,
      a: 0.7562,
      b: 0.7825
    },
    helium: {
      halfTime: 6.99,
      k: 0.09916268677538559,
      a: 1.0458,
      b: 0.7223
    }
  },
  {
    id: '5',
    nitrogen: {
      halfTime: 27,
      k: 0.025672117798516494,
      a: 0.6491,
      b: 0.8126
    },
    helium: {
      halfTime: 10.21,
      k: 0.06788904804700736,
      a: 0.922,
      b: 0.7582
    }
  },
  {
    id: '6',
    nitrogen: {
      halfTime: 38.3,
      k: 0.01809783761253121,
      a: 0.5316,
      b: 0.8434
    },
    helium: {
      halfTime: 14.48,
      k: 0.04786928042541058,
      a: 0.8205,
      b: 0.7957
    }
  },
  {
    id: '7',
    nitrogen: {
      halfTime: 54.3,
      k: 0.012765141446776157,
      a: 0.4681,
      b: 0.8693
    },
    helium: {
      halfTime: 20.53,
      k: 0.03376264883389894,
      a: 0.7305,
      b: 0.8279
    }
  },
  {
    id: '8',
    nitrogen: {
      halfTime: 77,
      k: 0.009001911435843446,
      a: 0.4301,
      b: 0.891
    },
    helium: {
      halfTime: 29.11,
      k: 0.023811308160767614,
      a: 0.6502,
      b: 0.8553
    }
  },
  {
    id: '9',
    nitrogen: {
      halfTime: 109,
      k: 0.006359148445504085,
      a: 0.4049,
      b: 0.9092
    },
    helium: {
      halfTime: 41.2,
      k: 0.016823960693202553,
      a: 0.595,
      b: 0.8757
    }
  },
  {
    id: '10',
    nitrogen: {
      halfTime: 146,
      k: 0.004747583428492776,
      a: 0.3719,
      b: 0.9222
    },
    helium: {
      halfTime: 55.19,
      k: 0.012559289374160995,
      a: 0.5545,
      b: 0.8903
    }
  },
  {
    id: '11',
    nitrogen: {
      halfTime: 187,
      k: 0.0037066694147590657,
      a: 0.3447,
      b: 0.9319
    },
    helium: {
      halfTime: 70.69,
      k: 0.009805448869146206,
      a: 0.5333,
      b: 0.8997
    }
  },
  {
    id: '12',
    nitrogen: {
      halfTime: 239,
      k: 0.002900197408200608,
      a: 0.3176,
      b: 0.9403
    },
    helium: {
      halfTime: 90.34,
      k: 0.007672649773743029,
      a: 0.5189,
      b: 0.9073
    }
  },
  {
    id: '13',
    nitrogen: {
      halfTime: 305,
      k: 0.002272613706753919,
      a: 0.2828,
      b: 0.9477
    },
    helium: {
      halfTime: 115.29,
      k: 0.006012205573423066,
      a: 0.5181,
      b: 0.9122
    }
  },
  {
    id: '14',
    nitrogen: {
      halfTime: 390,
      k: 0.0017773004629742187,
      a: 0.2716,
      b: 0.9544
    },
    helium: {
      halfTime: 147.42,
      k: 0.0047018530766513725,
      a: 0.5176,
      b: 0.9171
    }
  },
  {
    id: '15',
    nitrogen: {
      halfTime: 498,
      k: 0.0013918618083533039,
      a: 0.2523,
      b: 0.9602
    },
    helium: {
      halfTime: 188.24,
      k: 0.0036822523404161987,
      a: 0.5172,
      b: 0.9217
    }
  },
  {
    id: '16',
    nitrogen: {
      halfTime: 635,
      k: 0.0010915703630865281,
      a: 0.2327,
      b: 0.9653
    },
    helium: {
      halfTime: 240.03,
      k: 0.002887752283297693,
      a: 0.5119,
      b: 0.9267
    }
  }
]

export default compartments
