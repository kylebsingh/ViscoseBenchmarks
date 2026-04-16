export interface RankInfo {
  key: string;
  name: string;
  headerColor: string;
  cellColor: string;
  isSpacer?: boolean;
}

export interface ScenarioData {
  name: string;
  thresholds: Record<string, number>;
}

export interface SubCategory {
  name: string;
  scenarios: ScenarioData[];
}

export interface Category {
  name: string;
  subcategories: SubCategory[];
}

export interface TierData {
  ranks: RankInfo[];
  categories: Category[];
}

export const ViscoseEasy: TierData = {
  "ranks": [
    {
      "key": "unranked",
      "name": "Unranked",
      "headerColor": "#ffffff",
      "cellColor": "#ffffff"
    },
    {
      "key": "lemming",
      "name": "Lemming",
      "headerColor": "#c5c3f2",
      "cellColor": "#ededfc"
    },
    {
      "key": "hare",
      "name": "Hare",
      "headerColor": "#b2cbea",
      "cellColor": "#dee9f7"
    },
    {
      "key": "ermine",
      "name": "Ermine",
      "headerColor": "#baf6fc",
      "cellColor": "#e9fdff"
    },
    {
      "key": "penguin",
      "name": "Penguin",
      "headerColor": "#6b94df",
      "cellColor": "#bfd7ff"
    },
    {
      "key": "fox",
      "name": "Fox",
      "headerColor": "#5558aa",
      "cellColor": "#bfc0eb"
    },
    {
      "key": "mammoth",
      "name": "Mammoth",
      "headerColor": "#6e3f98",
      "cellColor": "#bea3d5"
    },
    {
      "key": "orca",
      "name": "Orca",
      "headerColor": "#c080e4",
      "cellColor": "#e1c6f1"
    },
    {
      "key": "seal",
      "name": "Seal",
      "headerColor": "#f5bde8",
      "cellColor": "#ffe9f9"
    }
  ],
  "categories": [
    {
      "name": "Control Tracking",
      "subcategories": [
        {
          "name": "Arm",
          "scenarios": [
            {
              "name": "WhisphereRawControl Larger + Slowed",
              "thresholds": {
                "unranked": 0,
                "lemming": 5500,
                "hare": 6700,
                "ermine": 7800,
                "penguin": 8700,
                "fox": 9600,
                "mammoth": 10500,
                "orca": 11400,
                "seal": 12500
              }
            },
            {
              "name": "Whisphere 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 6300,
                "hare": 7700,
                "ermine": 9000,
                "penguin": 10000,
                "fox": 11000,
                "mammoth": 12000,
                "orca": 13000,
                "seal": 14500
              }
            },
            {
              "name": "SmoothBot Invincible Goated 75%",
              "thresholds": {
                "unranked": 0,
                "lemming": 1800,
                "hare": 2250,
                "ermine": 2650,
                "penguin": 2900,
                "fox": 3150,
                "mammoth": 3400,
                "orca": 3650,
                "seal": 4000
              }
            }
          ]
        },
        {
          "name": "Wrist",
          "scenarios": [
            {
              "name": "Leaptrack Goated 60% Larger",
              "thresholds": {
                "unranked": 0,
                "lemming": 850,
                "hare": 1200,
                "ermine": 1500,
                "penguin": 1700,
                "fox": 1900,
                "mammoth": 2100,
                "orca": 2250,
                "seal": 2450
              }
            },
            {
              "name": "Controlsphere rAim Easy 90%",
              "thresholds": {
                "unranked": 0,
                "lemming": 6100,
                "hare": 6950,
                "ermine": 7700,
                "penguin": 8400,
                "fox": 9100,
                "mammoth": 9800,
                "orca": 10500,
                "seal": 11500
              }
            },
            {
              "name": "VT Controlsphere Intermediate S5 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 1850,
                "hare": 2300,
                "ermine": 2700,
                "penguin": 3000,
                "fox": 3300,
                "mammoth": 3600,
                "orca": 3850,
                "seal": 4100
              }
            }
          ]
        },
        {
          "name": "Fingertip",
          "scenarios": [
            {
              "name": "Air Angelic 4 Voltaic Easy 80% (Good Version)",
              "thresholds": {
                "unranked": 0,
                "lemming": 1050,
                "hare": 1600,
                "ermine": 2000,
                "penguin": 2400,
                "fox": 2700,
                "mammoth": 3000,
                "orca": 3300,
                "seal": 3600
              }
            },
            {
              "name": "cloverRawControl Easy 80% Speed",
              "thresholds": {
                "unranked": 0,
                "lemming": 3900,
                "hare": 4550,
                "ermine": 5200,
                "penguin": 5700,
                "fox": 6200,
                "mammoth": 6700,
                "orca": 7200,
                "seal": 7700
              }
            },
            {
              "name": "Controlsphere Far, Far Larger 90%",
              "thresholds": {
                "unranked": 0,
                "lemming": 7600,
                "hare": 8150,
                "ermine": 8700,
                "penguin": 9200,
                "fox": 9800,
                "mammoth": 10200,
                "orca": 10900,
                "seal": 11500
              }
            }
          ]
        },
        {
          "name": "Blending",
          "scenarios": [
            {
              "name": "PGTI Voltaic Easy 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 350,
                "hare": 550,
                "ermine": 850,
                "penguin": 1100,
                "fox": 1350,
                "mammoth": 1600,
                "orca": 1900,
                "seal": 2250
              }
            },
            {
              "name": "Air CELESTIAL No UFO Easy Slowed",
              "thresholds": {
                "unranked": 0,
                "lemming": 820,
                "hare": 835,
                "ermine": 850,
                "penguin": 861,
                "fox": 870,
                "mammoth": 878,
                "orca": 884,
                "seal": 890
              }
            },
            {
              "name": "Whisphere Small & Slow 55%",
              "thresholds": {
                "unranked": 0,
                "lemming": 6000,
                "hare": 7500,
                "ermine": 9000,
                "penguin": 10000,
                "fox": 10750,
                "mammoth": 11500,
                "orca": 12250,
                "seal": 13500
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Reactive Tracking",
      "subcategories": [
        {
          "name": "Control",
          "scenarios": [
            {
              "name": "Air Voltaic Invincible 7 Easy 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 750,
                "hare": 1200,
                "ermine": 1600,
                "penguin": 1900,
                "fox": 2200,
                "mammoth": 2500,
                "orca": 2800,
                "seal": 3200
              }
            },
            {
              "name": "Controlsphere OW Long Strafes 90%",
              "thresholds": {
                "unranked": 0,
                "lemming": 5400,
                "hare": 6100,
                "ermine": 6700,
                "penguin": 7200,
                "fox": 7600,
                "mammoth": 8000,
                "orca": 8300,
                "seal": 8700
              }
            }
          ]
        },
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Flicker Plaza rAim Easy Less Blinks",
              "thresholds": {
                "unranked": 0,
                "lemming": 858,
                "hare": 871,
                "ermine": 883,
                "penguin": 890,
                "fox": 895,
                "mammoth": 900,
                "orca": 904,
                "seal": 909
              }
            },
            {
              "name": "Polarized Hell Easy 40% Slower",
              "thresholds": {
                "unranked": 0,
                "lemming": 750,
                "hare": 1100,
                "ermine": 1400,
                "penguin": 1600,
                "fox": 1800,
                "mammoth": 2000,
                "orca": 2150,
                "seal": 2500
              }
            }
          ]
        },
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "Air Pure Intermediate Slower No UFO",
              "thresholds": {
                "unranked": 0,
                "lemming": 860,
                "hare": 874,
                "ermine": 886,
                "penguin": 893,
                "fox": 901,
                "mammoth": 907,
                "orca": 911,
                "seal": 916
              }
            },
            {
              "name": "Air Voltaic Easy Invincible 4 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 1100,
                "hare": 1600,
                "ermine": 2100,
                "penguin": 2450,
                "fox": 2800,
                "mammoth": 3150,
                "orca": 3400,
                "seal": 3800
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Flick Tech",
      "subcategories": [
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Pokeball Frenzy Auto TE Wide",
              "thresholds": {
                "unranked": 0,
                "lemming": 650,
                "hare": 950,
                "ermine": 1250,
                "penguin": 1500,
                "fox": 1750,
                "mammoth": 2000,
                "orca": 2300,
                "seal": 2700
              }
            },
            {
              "name": "1w3ts reload Larger",
              "thresholds": {
                "unranked": 0,
                "lemming": 36,
                "hare": 43,
                "ermine": 50,
                "penguin": 58,
                "fox": 70,
                "mammoth": 82,
                "orca": 92,
                "seal": 102
              }
            },
            {
              "name": "voxTargetSwitch 2 Large",
              "thresholds": {
                "unranked": 0,
                "lemming": 67,
                "hare": 78,
                "ermine": 87,
                "penguin": 95,
                "fox": 103,
                "mammoth": 110,
                "orca": 117,
                "seal": 123
              }
            }
          ]
        },
        {
          "name": "Stability",
          "scenarios": [
            {
              "name": "beanTS Larger",
              "thresholds": {
                "unranked": 0,
                "lemming": 65,
                "hare": 78,
                "ermine": 90,
                "penguin": 100,
                "fox": 110,
                "mammoth": 120,
                "orca": 130,
                "seal": 142
              }
            },
            {
              "name": "FloatTS Angelic Easy Larger",
              "thresholds": {
                "unranked": 0,
                "lemming": 65,
                "hare": 74,
                "ermine": 81,
                "penguin": 88,
                "fox": 95,
                "mammoth": 101,
                "orca": 106,
                "seal": 111
              }
            }
          ]
        },
        {
          "name": "Micro",
          "scenarios": [
            {
              "name": "waldoTS Novice",
              "thresholds": {
                "unranked": 0,
                "lemming": 65,
                "hare": 78,
                "ermine": 90,
                "penguin": 100,
                "fox": 110,
                "mammoth": 120,
                "orca": 130,
                "seal": 140
              }
            },
            {
              "name": "devTS Goated NR Static 5Bot",
              "thresholds": {
                "unranked": 0,
                "lemming": 350,
                "hare": 400,
                "ermine": 450,
                "penguin": 500,
                "fox": 550,
                "mammoth": 600,
                "orca": 640,
                "seal": 680
              }
            }
          ]
        },
        {
          "name": "Evasive",
          "scenarios": [
            {
              "name": "domiSwitch Easy Slower",
              "thresholds": {
                "unranked": 0,
                "lemming": 3200,
                "hare": 3700,
                "ermine": 4200,
                "penguin": 4600,
                "fox": 5000,
                "mammoth": 5400,
                "orca": 5800,
                "seal": 6300
              }
            },
            {
              "name": "tamTargetSwitch Smooth Easy",
              "thresholds": {
                "unranked": 0,
                "lemming": 7,
                "hare": 11,
                "ermine": 15,
                "penguin": 18,
                "fox": 21,
                "mammoth": 24,
                "orca": 26,
                "seal": 28
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Dynamic Clicking",
      "subcategories": [
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "1wall5targets_pasu slow",
              "thresholds": {
                "unranked": 0,
                "lemming": 76,
                "hare": 88,
                "ermine": 100,
                "penguin": 110,
                "fox": 120,
                "mammoth": 130,
                "orca": 140,
                "seal": 150
              }
            },
            {
              "name": "B180 Voltaic Easy 92%",
              "thresholds": {
                "unranked": 0,
                "lemming": 26,
                "hare": 38,
                "ermine": 50,
                "penguin": 58,
                "fox": 65,
                "mammoth": 72,
                "orca": 78,
                "seal": 87
              }
            },
            {
              "name": "Controlsphere Click Easy",
              "thresholds": {
                "unranked": 0,
                "lemming": 15,
                "hare": 21,
                "ermine": 27,
                "penguin": 33,
                "fox": 39,
                "mammoth": 45,
                "orca": 50,
                "seal": 55
              }
            }
          ]
        },
        {
          "name": "Precision",
          "scenarios": [
            {
              "name": "Popcorn MV Novice",
              "thresholds": {
                "unranked": 0,
                "lemming": 50,
                "hare": 100,
                "ermine": 150,
                "penguin": 190,
                "fox": 230,
                "mammoth": 270,
                "orca": 300,
                "seal": 330
              }
            },
            {
              "name": "Pasu Angelic 20% Larger 80% Speed",
              "thresholds": {
                "unranked": 0,
                "lemming": 51,
                "hare": 58,
                "ermine": 65,
                "penguin": 72,
                "fox": 78,
                "mammoth": 84,
                "orca": 90,
                "seal": 97
              }
            },
            {
              "name": "1w2ts Pasu Perfected Easy",
              "thresholds": {
                "unranked": 0,
                "lemming": 58,
                "hare": 69,
                "ermine": 80,
                "penguin": 87,
                "fox": 93,
                "mammoth": 99,
                "orca": 105,
                "seal": 110
              }
            }
          ]
        },
        {
          "name": "Linear",
          "scenarios": [
            {
              "name": "1w3ts Pasu Perfected Micro Goated Larger 80%",
              "thresholds": {
                "unranked": 0,
                "lemming": 600,
                "hare": 700,
                "ermine": 800,
                "penguin": 900,
                "fox": 1000,
                "mammoth": 1100,
                "orca": 1200,
                "seal": 1300
              }
            },
            {
              "name": "Floating Heads Timing 400% Larger",
              "thresholds": {
                "unranked": 0,
                "lemming": 400,
                "hare": 700,
                "ermine": 1000,
                "penguin": 1350,
                "fox": 1700,
                "mammoth": 2050,
                "orca": 2400,
                "seal": 2750
              }
            },
            {
              "name": "voxTargetSwitch Click",
              "thresholds": {
                "unranked": 0,
                "lemming": 49,
                "hare": 59,
                "ermine": 67,
                "penguin": 74,
                "fox": 81,
                "mammoth": 88,
                "orca": 94,
                "seal": 100
              }
            }
          ]
        }
      ]
    }
  ]
};

export const ViscoseMedium: TierData = {
  "ranks": [
    {
      "key": "unranked",
      "name": "Unranked",
      "headerColor": "#ffffff",
      "cellColor": "#ffffff"
    },
    {
      "key": "cinnabar",
      "name": "Cinnabar",
      "headerColor": "#ce3d30",
      "cellColor": "#ea9790"
    },
    {
      "key": "vermillion",
      "name": "Vermillion",
      "headerColor": "#f85939",
      "cellColor": "#fdcaa5"
    },
    {
      "key": "saffron",
      "name": "Saffron",
      "headerColor": "#f1c338",
      "cellColor": "#f5e6b8"
    },
    {
      "key": "celadon",
      "name": "Celadon",
      "headerColor": "#9cff91",
      "cellColor": "#d4ffd0"
    },
    {
      "key": "cerulean",
      "name": "Cerulean",
      "headerColor": "#02a4d3",
      "cellColor": "#b8efff"
    },
    {
      "key": "lavender",
      "name": "Lavender",
      "headerColor": "#c2c2ff",
      "cellColor": "#ededff"
    },
    {
      "key": "indigo",
      "name": "Indigo",
      "headerColor": "#5c3896",
      "cellColor": "#dccdf6"
    },
    {
      "key": "fuchsia",
      "name": "Fuchsia",
      "headerColor": "#c74375",
      "cellColor": "#fbc5d9"
    }
  ],
  "categories": [
    {
      "name": "Control Tracking",
      "subcategories": [
        {
          "name": "Arm",
          "scenarios": [
            {
              "name": "WhisphereRawControl",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 5300,
                "vermillion": 6700,
                "saffron": 7600,
                "celadon": 8800,
                "cerulean": 10000,
                "lavender": 10900,
                "indigo": 11800,
                "fuchsia": 13000
              }
            },
            {
              "name": "Whisphere",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 5750,
                "vermillion": 8250,
                "saffron": 10750,
                "celadon": 13250,
                "cerulean": 15250,
                "lavender": 17250,
                "indigo": 19250,
                "fuchsia": 20500
              }
            },
            {
              "name": "SmoothBot Invincible Goated",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1700,
                "vermillion": 2200,
                "saffron": 2750,
                "celadon": 3250,
                "cerulean": 3800,
                "lavender": 4300,
                "indigo": 4650,
                "fuchsia": 5000
              }
            }
          ]
        },
        {
          "name": "Wrist",
          "scenarios": [
            {
              "name": "Leaptrack Goated 75% Slightly Larger",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1400,
                "vermillion": 1750,
                "saffron": 2000,
                "celadon": 2250,
                "cerulean": 2500,
                "lavender": 2750,
                "indigo": 3000,
                "fuchsia": 3275
              }
            },
            {
              "name": "Controlsphere rAim Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 7400,
                "vermillion": 8500,
                "saffron": 9600,
                "celadon": 10700,
                "cerulean": 11900,
                "lavender": 13100,
                "indigo": 14300,
                "fuchsia": 15100
              }
            },
            {
              "name": "VT Controlsphere Novice S5 Hard",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 2100,
                "vermillion": 2500,
                "saffron": 2950,
                "celadon": 3250,
                "cerulean": 3550,
                "lavender": 3800,
                "indigo": 4100,
                "fuchsia": 4400
              }
            }
          ]
        },
        {
          "name": "Fingertip",
          "scenarios": [
            {
              "name": "Air Angelic 4 Voltaic Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1900,
                "vermillion": 2300,
                "saffron": 2650,
                "celadon": 3000,
                "cerulean": 3400,
                "lavender": 3750,
                "indigo": 4100,
                "fuchsia": 4450
              }
            },
            {
              "name": "cloverRawControl Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 5000,
                "vermillion": 6100,
                "saffron": 7000,
                "celadon": 8100,
                "cerulean": 9200,
                "lavender": 10100,
                "indigo": 10900,
                "fuchsia": 11700
              }
            },
            {
              "name": "Controlsphere Far Larger",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 7800,
                "vermillion": 8600,
                "saffron": 9300,
                "celadon": 10000,
                "cerulean": 10800,
                "lavender": 11700,
                "indigo": 12700,
                "fuchsia": 13600
              }
            }
          ]
        },
        {
          "name": "Blending",
          "scenarios": [
            {
              "name": "PGTI Voltaic Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 800,
                "vermillion": 1100,
                "saffron": 1400,
                "celadon": 1700,
                "cerulean": 2000,
                "lavender": 2300,
                "indigo": 2750,
                "fuchsia": 3200
              }
            },
            {
              "name": "Air CELESTIAL No UFO Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 825,
                "vermillion": 840,
                "saffron": 855,
                "celadon": 865,
                "cerulean": 881,
                "lavender": 890,
                "indigo": 902,
                "fuchsia": 908
              }
            },
            {
              "name": "Whisphere Small & Slow 75%",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 5500,
                "vermillion": 7500,
                "saffron": 9500,
                "celadon": 11500,
                "cerulean": 13500,
                "lavender": 15500,
                "indigo": 17500,
                "fuchsia": 19000
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Reactive Tracking",
      "subcategories": [
        {
          "name": "Control",
          "scenarios": [
            {
              "name": "Ground Plaza Sparky v3",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 862,
                "vermillion": 872,
                "saffron": 882,
                "celadon": 888,
                "cerulean": 894,
                "lavender": 900,
                "indigo": 905,
                "fuchsia": 909
              }
            },
            {
              "name": "Controlsphere OW",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 4800,
                "vermillion": 5700,
                "saffron": 6400,
                "celadon": 7300,
                "cerulean": 8100,
                "lavender": 8900,
                "indigo": 9800,
                "fuchsia": 10500
              }
            }
          ]
        },
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Flicker Plaza rAim Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 860,
                "vermillion": 870,
                "saffron": 881,
                "celadon": 891,
                "cerulean": 900,
                "lavender": 908,
                "indigo": 913,
                "fuchsia": 917
              }
            },
            {
              "name": "Polarized Hell Easy 20% Slower",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1600,
                "vermillion": 1850,
                "saffron": 2100,
                "celadon": 2350,
                "cerulean": 2600,
                "lavender": 2850,
                "indigo": 3150,
                "fuchsia": 3350
              }
            }
          ]
        },
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "Air Pure Intermediate",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 847,
                "vermillion": 862,
                "saffron": 876,
                "celadon": 886,
                "cerulean": 895,
                "lavender": 902,
                "indigo": 906,
                "fuchsia": 910
              }
            },
            {
              "name": "Air Voltaic Easy Invincible 4",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1800,
                "vermillion": 2150,
                "saffron": 2500,
                "celadon": 2950,
                "cerulean": 3350,
                "lavender": 3750,
                "indigo": 4150,
                "fuchsia": 4450
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Flick Tech",
      "subcategories": [
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Pokeball Frenzy Auto TE Wide",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1950,
                "vermillion": 2250,
                "saffron": 2550,
                "celadon": 2850,
                "cerulean": 3150,
                "lavender": 3400,
                "indigo": 3600,
                "fuchsia": 3800
              }
            },
            {
              "name": "1w3ts Reload",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 66,
                "vermillion": 76,
                "saffron": 86,
                "celadon": 96,
                "cerulean": 106,
                "lavender": 116,
                "indigo": 126,
                "fuchsia": 135
              }
            },
            {
              "name": "voxTargetSwitch 2",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 78,
                "vermillion": 88,
                "saffron": 98,
                "celadon": 107,
                "cerulean": 116,
                "lavender": 123,
                "indigo": 130,
                "fuchsia": 136
              }
            }
          ]
        },
        {
          "name": "Stability",
          "scenarios": [
            {
              "name": "BeanTS",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 88,
                "vermillion": 103,
                "saffron": 115,
                "celadon": 127,
                "cerulean": 136,
                "lavender": 143,
                "indigo": 149,
                "fuchsia": 156
              }
            },
            {
              "name": "FloatTS Angelic Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 70,
                "vermillion": 79,
                "saffron": 86,
                "celadon": 93,
                "cerulean": 100,
                "lavender": 107,
                "indigo": 115,
                "fuchsia": 123
              }
            }
          ]
        },
        {
          "name": "Micro",
          "scenarios": [
            {
              "name": "WaldoTS Intermediate",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 108,
                "vermillion": 117,
                "saffron": 126,
                "celadon": 135,
                "cerulean": 144,
                "lavender": 153,
                "indigo": 162,
                "fuchsia": 170
              }
            },
            {
              "name": "devTS Goated NR Static 5Bot",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 600,
                "vermillion": 650,
                "saffron": 705,
                "celadon": 760,
                "cerulean": 810,
                "lavender": 840,
                "indigo": 870,
                "fuchsia": 900
              }
            }
          ]
        },
        {
          "name": "Post-flick",
          "scenarios": [
            {
              "name": "domiSwitch Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 4200,
                "vermillion": 4700,
                "saffron": 5200,
                "celadon": 5700,
                "cerulean": 6150,
                "lavender": 6600,
                "indigo": 7100,
                "fuchsia": 7600
              }
            },
            {
              "name": "tamTargetSwitch Smooth Easy",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 22,
                "vermillion": 26,
                "saffron": 29,
                "celadon": 32,
                "cerulean": 34,
                "lavender": 36,
                "indigo": 38,
                "fuchsia": 41
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Click Timing",
      "subcategories": [
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "1wall5targets_pasu Reload",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 70,
                "vermillion": 85,
                "saffron": 100,
                "celadon": 115,
                "cerulean": 130,
                "lavender": 142,
                "indigo": 155,
                "fuchsia": 165
              }
            },
            {
              "name": "VT Bounceshot Intermediate",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 550,
                "vermillion": 640,
                "saffron": 720,
                "celadon": 780,
                "cerulean": 850,
                "lavender": 900,
                "indigo": 980,
                "fuchsia": 1060
              }
            },
            {
              "name": "Controlsphere Click",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 27,
                "vermillion": 33,
                "saffron": 39,
                "celadon": 45,
                "cerulean": 50,
                "lavender": 56,
                "indigo": 61,
                "fuchsia": 67
              }
            }
          ]
        },
        {
          "name": "Precision",
          "scenarios": [
            {
              "name": "Popcorn MV Intermediate",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 150,
                "vermillion": 190,
                "saffron": 240,
                "celadon": 280,
                "cerulean": 330,
                "lavender": 380,
                "indigo": 430,
                "fuchsia": 480
              }
            },
            {
              "name": "Pasu Angelic 20% Larger",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 72,
                "vermillion": 79,
                "saffron": 85,
                "celadon": 90,
                "cerulean": 96,
                "lavender": 103,
                "indigo": 110,
                "fuchsia": 115
              }
            },
            {
              "name": "1w2ts Pasu Perfected",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 60,
                "vermillion": 70,
                "saffron": 80,
                "celadon": 88,
                "cerulean": 96,
                "lavender": 101,
                "indigo": 107,
                "fuchsia": 112
              }
            }
          ]
        },
        {
          "name": "Stability",
          "scenarios": [
            {
              "name": "1w3ts Pasu Perfected Micro Goated Larger",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 900,
                "vermillion": 1000,
                "saffron": 1100,
                "celadon": 1200,
                "cerulean": 1300,
                "lavender": 1400,
                "indigo": 1500,
                "fuchsia": 1600
              }
            },
            {
              "name": "Floating Heads Timing 400% Larger",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 1950,
                "vermillion": 2300,
                "saffron": 2650,
                "celadon": 3000,
                "cerulean": 3350,
                "lavender": 3650,
                "indigo": 3900,
                "fuchsia": 4200
              }
            },
            {
              "name": "voxTargetClick 20% Small",
              "thresholds": {
                "unranked": 0,
                "cinnabar": 62,
                "vermillion": 72,
                "saffron": 80,
                "celadon": 87,
                "cerulean": 95,
                "lavender": 102,
                "indigo": 108,
                "fuchsia": 116
              }
            }
          ]
        }
      ]
    }
  ]
};

export const ViscoseHard: TierData = {
  "ranks": [
    {
      "key": "unranked",
      "name": "Unranked",
      "headerColor": "#ffffff",
      "cellColor": "#ffffff"
    },
    {
      "key": "wool",
      "name": "Wool",
      "headerColor": "#f1eceb",
      "cellColor": "#fafafa"
    },
    {
      "key": "linen",
      "name": "Linen",
      "headerColor": "#eed3ce",
      "cellColor": "#fff2ef"
    },
    {
      "key": "velvet",
      "name": "Velvet",
      "headerColor": "#eec8c7",
      "cellColor": "#ffefee"
    },
    {
      "key": "chiffon",
      "name": "Chiffon",
      "headerColor": "#b3e0f4",
      "cellColor": "#d7edf7"
    },
    {
      "key": "satin",
      "name": "Satin",
      "headerColor": "#77b7d0",
      "cellColor": "#a9dbf0"
    },
    {
      "key": "silk",
      "name": "Silk",
      "headerColor": "#468da3",
      "cellColor": "#aad4e2"
    },
    {
      "key": "rank_6",
      "name": "",
      "headerColor": "#677e8f",
      "cellColor": "#677e8f",
      "isSpacer": true
    },
    {
      "key": "viscose",
      "name": "Viscose",
      "headerColor": "#a5cae4",
      "cellColor": "#dfeffa"
    }
  ],
  "categories": [
    {
      "name": "Control Tracking",
      "subcategories": [
        {
          "name": "Arm",
          "scenarios": [
            {
              "name": "WhisphereRawControl 30% Small",
              "thresholds": {
                "unranked": 0,
                "wool": 7100,
                "linen": 7700,
                "velvet": 8300,
                "chiffon": 8900,
                "satin": 9900,
                "silk": 11000,
                "rank_6": 0,
                "viscose": 11832
              }
            },
            {
              "name": "Whisphere Small & Slow",
              "thresholds": {
                "unranked": 0,
                "wool": 14000,
                "linen": 15250,
                "velvet": 16500,
                "chiffon": 18000,
                "satin": 19500,
                "silk": 20500,
                "rank_6": 0,
                "viscose": 21490
              }
            },
            {
              "name": "SmoothBot Invincible Goated Smaller",
              "thresholds": {
                "unranked": 0,
                "wool": 2700,
                "linen": 3200,
                "velvet": 3450,
                "chiffon": 3850,
                "satin": 4200,
                "silk": 4450,
                "rank_6": 0,
                "viscose": 4494
              }
            }
          ]
        },
        {
          "name": "Wrist",
          "scenarios": [
            {
              "name": "Leaptrack Goated 80%",
              "thresholds": {
                "unranked": 0,
                "wool": 2500,
                "linen": 2625,
                "velvet": 2750,
                "chiffon": 2850,
                "satin": 3000,
                "silk": 3200,
                "rank_6": 0,
                "viscose": 3210
              }
            },
            {
              "name": "Controlsphere rAim",
              "thresholds": {
                "unranked": 0,
                "wool": 9100,
                "linen": 9850,
                "velvet": 10700,
                "chiffon": 11300,
                "satin": 11900,
                "silk": 12350,
                "rank_6": 0,
                "viscose": 12894
              }
            },
            {
              "name": "VT Controlsphere Intermediate Hard",
              "thresholds": {
                "unranked": 0,
                "wool": 2850,
                "linen": 3200,
                "velvet": 3500,
                "chiffon": 3800,
                "satin": 4000,
                "silk": 4200,
                "rank_6": 0,
                "viscose": 4497
              }
            }
          ]
        },
        {
          "name": "Fingertip",
          "scenarios": [
            {
              "name": "Air Angelic 4 Voltaic",
              "thresholds": {
                "unranked": 0,
                "wool": 3300,
                "linen": 3650,
                "velvet": 3850,
                "chiffon": 4100,
                "satin": 4225,
                "silk": 4350,
                "rank_6": 0,
                "viscose": 4440
              }
            },
            {
              "name": "cloverRawControl",
              "thresholds": {
                "unranked": 0,
                "wool": 7000,
                "linen": 7650,
                "velvet": 8200,
                "chiffon": 8650,
                "satin": 9200,
                "silk": 10100,
                "rank_6": 0,
                "viscose": 10671
              }
            },
            {
              "name": "Controlsphere Far",
              "thresholds": {
                "unranked": 0,
                "wool": 8600,
                "linen": 9200,
                "velvet": 9800,
                "chiffon": 10600,
                "satin": 11200,
                "silk": 12000,
                "rank_6": 0,
                "viscose": 12321
              }
            }
          ]
        },
        {
          "name": "Blending",
          "scenarios": [
            {
              "name": "PGTI Voltaic",
              "thresholds": {
                "unranked": 0,
                "wool": 1350,
                "linen": 1650,
                "velvet": 1900,
                "chiffon": 2150,
                "satin": 2400,
                "silk": 2700,
                "rank_6": 0,
                "viscose": 2800
              }
            },
            {
              "name": "Air CELESTIAL",
              "thresholds": {
                "unranked": 0,
                "wool": 867,
                "linen": 875,
                "velvet": 885,
                "chiffon": 890,
                "satin": 894,
                "silk": 897,
                "rank_6": 0,
                "viscose": 901.5
              }
            },
            {
              "name": "Whisphere Extra Small & Slow",
              "thresholds": {
                "unranked": 0,
                "wool": 8500,
                "linen": 10300,
                "velvet": 11000,
                "chiffon": 12500,
                "satin": 13500,
                "silk": 14500,
                "rank_6": 0,
                "viscose": 15230
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Reactive Tracking",
      "subcategories": [
        {
          "name": "Control",
          "scenarios": [
            {
              "name": "Ground Plaza Sparky v3 Thin",
              "thresholds": {
                "unranked": 0,
                "wool": 881,
                "linen": 886,
                "velvet": 891,
                "chiffon": 895,
                "satin": 898,
                "silk": 901,
                "rank_6": 0,
                "viscose": 904
              }
            },
            {
              "name": "Controlsphere OW 150%",
              "thresholds": {
                "unranked": 0,
                "wool": 6900,
                "linen": 7600,
                "velvet": 8100,
                "chiffon": 8525,
                "satin": 8950,
                "silk": 9500,
                "rank_6": 0,
                "viscose": 9525
              }
            }
          ]
        },
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Flicker Plaza",
              "thresholds": {
                "unranked": 0,
                "wool": 890,
                "linen": 896,
                "velvet": 901,
                "chiffon": 905,
                "satin": 910,
                "silk": 914,
                "rank_6": 0,
                "viscose": 916
              }
            },
            {
              "name": "Polarized Hell 20% Slower",
              "thresholds": {
                "unranked": 0,
                "wool": 2550,
                "linen": 2700,
                "velvet": 2850,
                "chiffon": 3000,
                "satin": 3150,
                "silk": 3300,
                "rank_6": 0,
                "viscose": 3319
              }
            }
          ]
        },
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "Air Pure",
              "thresholds": {
                "unranked": 0,
                "wool": 884,
                "linen": 890,
                "velvet": 895,
                "chiffon": 900,
                "satin": 905,
                "silk": 909,
                "rank_6": 0,
                "viscose": 916
              }
            },
            {
              "name": "Air Voltaic Invincible 4",
              "thresholds": {
                "unranked": 0,
                "wool": 2800,
                "linen": 3150,
                "velvet": 3450,
                "chiffon": 3700,
                "satin": 3900,
                "silk": 4100,
                "rank_6": 0,
                "viscose": 4230
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Flick Tech",
      "subcategories": [
        {
          "name": "Speed",
          "scenarios": [
            {
              "name": "Pokeball Frenzy Auto TE Wide",
              "thresholds": {
                "unranked": 0,
                "wool": 3550,
                "linen": 3725,
                "velvet": 3850,
                "chiffon": 4000,
                "satin": 4100,
                "silk": 4200,
                "rank_6": 0,
                "viscose": 4560
              }
            },
            {
              "name": "1w2ts Reload",
              "thresholds": {
                "unranked": 0,
                "wool": 106,
                "linen": 114,
                "velvet": 121,
                "chiffon": 127,
                "satin": 133,
                "silk": 138,
                "rank_6": 0,
                "viscose": 139
              }
            },
            {
              "name": "voxTargetSwitch 2 20% Smaller",
              "thresholds": {
                "unranked": 0,
                "wool": 103,
                "linen": 111,
                "velvet": 116,
                "chiffon": 121,
                "satin": 127,
                "silk": 133,
                "rank_6": 0,
                "viscose": 134
              }
            }
          ]
        },
        {
          "name": "Stability",
          "scenarios": [
            {
              "name": "BeanTS 30% Smaller",
              "thresholds": {
                "unranked": 0,
                "wool": 119,
                "linen": 127,
                "velvet": 134,
                "chiffon": 139,
                "satin": 143,
                "silk": 147,
                "rank_6": 0,
                "viscose": 150
              }
            },
            {
              "name": "FloatTS Angelic",
              "thresholds": {
                "unranked": 0,
                "wool": 94,
                "linen": 100,
                "velvet": 105,
                "chiffon": 110,
                "satin": 114,
                "silk": 118,
                "rank_6": 0,
                "viscose": 122
              }
            }
          ]
        },
        {
          "name": "Micro",
          "scenarios": [
            {
              "name": "WaldoTS",
              "thresholds": {
                "unranked": 0,
                "wool": 145,
                "linen": 153,
                "velvet": 160,
                "chiffon": 166,
                "satin": 173,
                "silk": 178,
                "rank_6": 0,
                "viscose": 176
              }
            },
            {
              "name": "devTS Goated NR Static Small 5Bot",
              "thresholds": {
                "unranked": 0,
                "wool": 750,
                "linen": 775,
                "velvet": 800,
                "chiffon": 825,
                "satin": 850,
                "silk": 870,
                "rank_6": 0,
                "viscose": 873
              }
            }
          ]
        },
        {
          "name": "Post-flick",
          "scenarios": [
            {
              "name": "domiSwitch",
              "thresholds": {
                "unranked": 0,
                "wool": 5550,
                "linen": 5950,
                "velvet": 6250,
                "chiffon": 6550,
                "satin": 6850,
                "silk": 7200,
                "rank_6": 0,
                "viscose": 7433
              }
            },
            {
              "name": "tamTargetSwitch Smooth",
              "thresholds": {
                "unranked": 0,
                "wool": 32,
                "linen": 35,
                "velvet": 37,
                "chiffon": 39,
                "satin": 42,
                "silk": 45,
                "rank_6": 0,
                "viscose": 45
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Dynamic Clicking",
      "subcategories": [
        {
          "name": "Reading",
          "scenarios": [
            {
              "name": "Pasu Reload Goated",
              "thresholds": {
                "unranked": 0,
                "wool": 110,
                "linen": 120,
                "velvet": 130,
                "chiffon": 140,
                "satin": 150,
                "silk": 160,
                "rank_6": 0,
                "viscose": 167
              }
            },
            {
              "name": "VT Bounceshot Advanced",
              "thresholds": {
                "unranked": 0,
                "wool": 730,
                "linen": 790,
                "velvet": 850,
                "chiffon": 910,
                "satin": 950,
                "silk": 1000,
                "rank_6": 0,
                "viscose": 1010
              }
            },
            {
              "name": "Controlsphere Click Smaller",
              "thresholds": {
                "unranked": 0,
                "wool": 39,
                "linen": 45,
                "velvet": 51,
                "chiffon": 56,
                "satin": 60,
                "silk": 64,
                "rank_6": 0,
                "viscose": 64
              }
            }
          ]
        },
        {
          "name": "Precision",
          "scenarios": [
            {
              "name": "Popcorn MV Advanced",
              "thresholds": {
                "unranked": 0,
                "wool": 290,
                "linen": 330,
                "velvet": 370,
                "chiffon": 420,
                "satin": 460,
                "silk": 500,
                "rank_6": 0,
                "viscose": 520
              }
            },
            {
              "name": "Pasu Angelic",
              "thresholds": {
                "unranked": 0,
                "wool": 87,
                "linen": 94,
                "velvet": 102,
                "chiffon": 110,
                "satin": 118,
                "silk": 125,
                "rank_6": 0,
                "viscose": 126
              }
            },
            {
              "name": "1w2ts Pasu Perfected 30% Smaller",
              "thresholds": {
                "unranked": 0,
                "wool": 75,
                "linen": 82,
                "velvet": 87,
                "chiffon": 93,
                "satin": 98,
                "silk": 103,
                "rank_6": 0,
                "viscose": 104
              }
            }
          ]
        },
        {
          "name": "Linear",
          "scenarios": [
            {
              "name": "1w3ts Pasu Perfected Micro Goated",
              "thresholds": {
                "unranked": 0,
                "wool": 1100,
                "linen": 1200,
                "velvet": 1300,
                "chiffon": 1400,
                "satin": 1500,
                "silk": 1560,
                "rank_6": 0,
                "viscose": 1522
              }
            },
            {
              "name": "Floating Heads Timing 400% Fixed",
              "thresholds": {
                "unranked": 0,
                "wool": 3200,
                "linen": 3484,
                "velvet": 3648,
                "chiffon": 3848,
                "satin": 4048,
                "silk": 4248,
                "rank_6": 0,
                "viscose": 4212
              }
            },
            {
              "name": "VoxTargetSwitch Click Small",
              "thresholds": {
                "unranked": 0,
                "wool": 90,
                "linen": 96,
                "velvet": 101,
                "chiffon": 106,
                "satin": 111,
                "silk": 115,
                "rank_6": 0,
                "viscose": 115
              }
            }
          ]
        }
      ]
    }
  ]
};
