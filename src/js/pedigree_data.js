// fix arrow end issues:

const CHART = {
    chart: {
      container: "#pedigree-tree",
      levelSeparation: 20,
    siblingSeparation: 10,
    subTeeSeparation: 20,
      rootOrientation: "WEST",
      nodeAlign: "BOTTOM",
      connectors: {
        type: "step",
        style: {
          "stroke-width": 2,
          stroke: "rgba(127, 219, 145, 0.5)"
        }
      },
      node: {
        HTMLclass: "dog-pedigree"
      }
    },
    nodeStructure: {}
  };

function getChartData(dogName) {
  // return {...CHART, nodeStructure: chart_data[dogName]}
  return Object.assign({}, CHART, {  nodeStructure: chart_data[dogName] });
}

var chart_data = {};

chart_data.djanga = {
  text: {
    name: "Django Od Moslavine"
  },
  connectors: {},
  stackChildren: true,
  children: [
    {
      text: {
        name: "Chapman vom Holzmicheltal"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Alf vom Nordhang der Eifel"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Daneskjold Hasse"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Arek von der Wautz"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/40/Arek-von-der-Wautz"
                  }
                },
                {
                  text: {
                    name: "Snake"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/405/Snake-NHSB-1815586"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/165/Daneskjold-Hasse"
              }
            },
            {
              text: {
                name: "Engie Airport Hannover"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Onix von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/367/Onix-von-L%C3%B6wenfels"
                  }
                },
                {
                  text: {
                    name: "Virginia von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/427/Virginia-von-L%C3%B6wenfels"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/558/Engie-Airport-Hannover"
              }
            }
          ],
          link: {
            target: "_blank",
            href: "https://www.working-dog.com/dogs-details/10/Alf-vom-Nordhang-der-Eifel"
          }
        },
        {
          text: {
            name: "Akida von Skandinavika"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Igor Perle de Tourbière"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Larco Perle de Tourbière"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/784/Larco-Perle-de-Tourbi%C3%A8re"
                  }
                },
                {
                  text: {
                    name: "Jill Perle de Tourbière"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/785/Jill-Perle-de-Tourbi%C3%A8re"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/270/Igor-Perle-de-Tourbi%C3%A8re"
              }
            },
            {
              text: {
                name: "Bonny de Mare Baltico V."
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Brando Airport Hannover"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/111/Brando-Airport-Hannover"
                  }
                },
                {
                  text: {
                    name: "Gadea von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/559/Gadea-von-L%C3%B6wenfels"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/4941/Bonny-de-mare-baltico-vehemente"
              }
            }
          ],
          link: {
            target: "_blank",
            href: "https://www.working-dog.com/dogs-details/10649/Akida-von-Skandinavika"
          }
        }
      ],
      link: {
        target: "_blank",
        href: "https://www.working-dog.com/dogs-details/421170/Chapman-vom-Holzmicheltal"
      }
    },
    {
      text: {
        name: "Lili od Slunja"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Conan van Karlosha"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Devil van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Yagus van de Duvetorre"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/1424/Yagus-van-de-Duvetorre"
                  }
                },
                {
                  text: {
                    name: "Arva van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/11233/Arva-van-Joefarm"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/72057/Devil-van-Joefarm"
              }
            },
            {
              text: {
                name: "Dinia van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Roe van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/783/Roe-van-Joefarm"
                  }
                },
                {
                  text: {
                    name: "Shara van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/2467/Shara-van-Joefarm"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/72058/Dinia-van-Joefarm"
              }
            }
          ],
          link: {
            target: "_blank",
            href: "https://www.working-dog.com/dogs-details/86104/Conan-van-Karlosha"
          }
        },
        {
          text: {
            name: "Dina od Slunja"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Chip vom Turda"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Blitz von der Ihleburg"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/2142/Blitz-von-der-Ihleburg"
                  }
                },
                {
                  text: {
                    name: "Ailina vom Haus Seli"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/2635/Ailina-vom-Haus-Seli"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/234781/Chip-vom-Turda"
              }
            },
            {
              text: {
                name: "Astra  HR 10639"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Apollo von den Obirhöhlen"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/2046/Apollo-von-den-Obirh%C3%B6hlen"
                  }
                },
                {
                  text: {
                    name: "Oti"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    target: "_blank",
                    href: "https://www.working-dog.com/dogs-details/60283/Oti--HR-10510-Mato"
                  }
                }
              ],
              link: {
                target: "_blank",
                href: "https://www.working-dog.com/dogs-details/926547/Astra--HR-10639"
              }
            }
          ],
          link: {
            target: "_blank",
            href: "https://www.working-dog.com/dogs-details/1020407/Dina-od-Slunja"
          }
        }
      ],
      link: {
        target: "_blank",
        href: "https://www.working-dog.com/dogs-details/1020408/Lili-od-Slunja"
      }
    }
  ],
  link: {
    target: "_blank",
    href: "https://www.working-dog.com/dogs-details/3144786/Django-Od-Moslavine"
  }
};

chart_data.gero = {
  text: {
    name: "Gero HR 11369Mn (Mato)"
  },
  connectors: {},
  stackChildren: true,
  children: [
    {
      text: {
        name: "Ingo vom Strengen Winter"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Aladin von der G. Helfenstein"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Klemm vom Roten Falken"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Ayko vom F. Augustdorf"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/63/Ayko-vom-Forsthaus-Augustdorf"
                  }
                },
                {
                  text: {
                    name: "Saskia von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/528/Saskia-von-L%C3%B6wenfels"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/303/Klemm-vom-Roten-Falken"
              }
            },
            {
              text: {
                name: "Esta von der Wautz"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Halusetha's Yellow Vero"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/253/Halusethas-Yellow-Vero"
                  }
                },
                {
                  text: {
                    name: "Hummel vom Roten Falken"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/268/Hummel-vom-Roten-Falken"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/1427/Esta-von-der-Wautz"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/1818/Aladin-von-der-Grafschaft-Helfenstein"
          }
        },
        {
          text: {
            name: "Furie vom Strengen Winter"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Nach LOF (Schwendinger)"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "GI'S des Loups Mutins"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2155/GIS-des-Loups-Mutins"
                  }
                },
                {
                  text: {
                    name: "Elegie des Bergers Vaillants"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2157/Elegie-des-Bergers-Vaillants"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/1837/Nach-LOF-364695212-Schwendinger"
              }
            },
            {
              text: {
                name: "Gera vom Siefelerberg"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Uwe von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1912/Uwe-von-L%C3%B6wenfels"
                  }
                },
                {
                  text: {
                    name: "Délice vom Siefelerberg"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2459/D%C3%A9lice-vom-Siefelerberg"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/34561/Gera-vom-Siefelerberg"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/8949/Furie-vom-Strengen-Winter"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/14962/Ingo-vom-Strengen-Winter"
      }
    },
    {
      text: {
        name: "Cilly van Karlosha"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Devil van Joefarm"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Yagus van de Duvetorre"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Stoned van de Duvetorre"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/409/Stoned-van-de-Duvetorre"
                  }
                },
                {
                  text: {
                    name: "Mira de la Ferronnerie"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1423/Mira-de-la-Ferronnerie-du-Huyberland"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/1424/Yagus-van-de-Duvetorre"
              }
            },
            {
              text: {
                name: "Arva van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Roe van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/783/Roe-van-Joefarm"
                  }
                },
                {
                  text: {
                    name: "Yellow van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/11234/Yellow-van-Joefarm"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/11233/Arva-van-Joefarm"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/72057/Devil-van-Joefarm"
          }
        },
        {
          text: {
            name: "Dinia van Joefarm"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Roe van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Lucas des Deux Pottois"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/722/Lucas-des-Deux-Pottois"
                  }
                },
                {
                  text: {
                    name: "Nina LOSH 625901"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/801/Nina-LOSH-625901"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/783/Roe-van-Joefarm"
              }
            },
            {
              text: {
                name: "Shara van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Elgos du Chemin des Plaines"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/204/Elgos-du-Chemin-des-Plaines"
                  }
                },
                {
                  text: {
                    name: "Pachas LOSH 679034"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2466/Pachas-LOSH-679034"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/2467/Shara-van-Joefarm"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/72058/Dinia-van-Joefarm"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/308448/Cilly-van-Karlosha"
      }
    }
  ],
  link: {
    href: "https://www.working-dog.com/dogs-details/5653425/Gero-HR-11369Mn-Mato"
  }
};

chart_data.ria = {
  text: {
    name: "Ria od Slunja"
  },
  connectors: {},
  stackChildren: true,
  children: [
    {
      text: {
        name: "Gero"
      },
      link: {
        href: "https://www.working-dog.com/dogs-details/5653425/Gero-HR-11369Mn-Mato"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Ingo vom Strengen Winter"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Aladin von der Grafschaft Helfenstein"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Klemm vom Roten Falken"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/303/Klemm-vom-Roten-Falken"
                  }
                },
                {
                  text: {
                    name: "Esta von der Wautz"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1427/Esta-von-der-Wautz"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/1818/Aladin-von-der-Grafschaft-Helfenstein"
              }
            },
            {
              text: {
                name: "Furie vom Strengen Winter"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Nach (Schwendinger)"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1837/Nach-LOF-364695212-Schwendinger"
                  }
                },
                {
                  text: {
                    name: "Gera vom Siefelerberg"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/34561/Gera-vom-Siefelerberg"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/8949/Furie-vom-Strengen-Winter"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/14962/Ingo-vom-Strengen-Winter"
          }
        },
        {
          text: {
            name: "Cilly van Karlosha"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Devil van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Yagus van de Duvetorre"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1424/Yagus-van-de-Duvetorre"
                  }
                },
                {
                  text: {
                    name: "Arva van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/11233/Arva-van-Joefarm"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/72057/Devil-van-Joefarm"
              }
            },
            {
              text: {
                name: "Dinia van Joefarm"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Roe van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/783/Roe-van-Joefarm"
                  }
                },
                {
                  text: {
                    name: "Shara van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2467/Shara-van-Joefarm"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/72058/Dinia-van-Joefarm"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/308448/Cilly-van-Karlosha"
          }
        }
      ]
    },
    {
      text: {
        name: "Django Od Moslavine"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Chapman vom Holzmicheltal"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Alf vom Nordhang der Eifel"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Daneskjold Hasse"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/165/Daneskjold-Hasse"
                  }
                },
                {
                  text: {
                    name: "Engie Airport Hannover"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/558/Engie-Airport-Hannover"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/10/Alf-vom-Nordhang-der-Eifel"
              }
            },
            {
              text: {
                name: "Akida von Skandinavika"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Igor Perle de Tourbière"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/270/Igor-Perle-de-Tourbi%C3%A8re"
                  }
                },
                {
                  text: {
                    name: "Bonny de mare baltico vehemente"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/4941/Bonny-de-mare-baltico-vehemente"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/10649/Akida-von-Skandinavika"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/421170/Chapman-vom-Holzmicheltal"
          }
        },
        {
          text: {
            name: "Lili od Slunja"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Conan van Karlosha"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Devil van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/72057/Devil-van-Joefarm"
                  }
                },
                {
                  text: {
                    name: "Dinia van Joefarm"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/72058/Dinia-van-Joefarm"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/86104/Conan-van-Karlosha"
              }
            },
            {
              text: {
                name: "Dina od Slunja"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Chip vom Turda"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/234781/Chip-vom-Turda"
                  }
                },
                {
                  text: {
                    name: "Astra  HR 10639"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/926547/Astra--HR-10639"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/1020407/Dina-od-Slunja"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/1020408/Lili-od-Slunja"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/3144786/Django-Od-Moslavine"
      }
    }
  ],
  link: {
    href: "https://www.working-dog.com/dogs-details/6390419/Ria-od-Slunja"
  }
};

chart_data.dina = {
  text: {
    name: "Dina od Slunja"
  },
  connectors: {},
  stackChildren: true,
  children: [
    {
      text: {
        name: "Chip vom Turda"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Blitz von der Ihleburg"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Sorba van Hoveld"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Dekx"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/608/Dekx-LOSH-436399"
                  }
                },
                {
                  text: {
                    name: "Ilske NHSB 1355320"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/609/Ilske"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/407/Sorba-van-Hoveld"
              }
            },
            {
              text: {
                name: "Zara von Löwenfels"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Oscar von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/581/Oscar-von-L%C3%B6wenfels"
                  }
                },
                {
                  text: {
                    name: "Lily des Deux Pottois"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/762/Lily-des-Deux-Pottois"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/2636/Zara-von-L%C3%B6wenfels-1991"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/2142/Blitz-von-der-Ihleburg"
          }
        },
        {
          text: {
            name: "Ailina vom Haus Seli"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Crack von Löwenfels"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Oscar von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/581/Oscar-von-L%C3%B6wenfels"
                  }
                },
                {
                  text: {
                    name: "Bea von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/724/Bea-von-L%C3%B6wenfels"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/586/Crack-von-L%C3%B6wenfels"
              }
            },
            {
              text: {
                name: "Seli Tordinac"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Boy des Loups Mutins"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1161/Boy-des-Loups-Mutins"
                  }
                },
                {
                  text: {
                    name: "Biscotte de Vulcain"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1163/Biscotte-de-Vulcain"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/640/Seli--JR-40040-Tordinac"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/2635/Ailina-vom-Haus-Seli"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/234781/Chip-vom-Turda"
      }
    },
    {
      text: {
        name: "Astra  HR 10639"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Apollo von den Obirhöhlen"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Mash vom Siefelerberg"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Fog des Montagnes d'Alaric"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2163/Fog-des-Montagnes-dAlaric"
                  }
                },
                {
                  text: {
                    name: "Délice vom Siefelerberg"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2459/D%C3%A9lice-vom-Siefelerberg"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/2460/Mash-vom-Siefelerberg"
              }
            },
            {
              text: {
                name: "Estrella le Bosseur"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Dachi di Vigna Secca"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2037/Dachi-di-Vigna-Secca"
                  }
                },
                {
                  text: {
                    name: "Bonja von Löwenfels"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1563/Bonja-von-L%C3%B6wenfels"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/2036/Estrella-le-Bosseur"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/2046/Apollo-von-den-Obirh%C3%B6hlen"
          }
        },
        {
          text: {
            name: "Oti  HR 10510 (Mato)"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Elton JR 40043"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Dart du Calvaire aux Acacias"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/168/Dart-du-Calvaire-aux-Acacias"
                  }
                },
                {
                  text: {
                    name: "Biscotte de Vulcain"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/1163/Biscotte-de-Vulcain"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/211/Elton-JR-40043"
              }
            },
            {
              text: {
                name: "Ives  HR 10506"
              },
              connectors: {},
              stackChildren: true,
              children: [
                {
                  text: {
                    name: "Pan Polluxova"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2575/Pan-Polluxova"
                  }
                },
                {
                  text: {
                    name: "Ora"
                  },
                  connectors: {},
                  stackChildren: true,
                  children: [],
                  link: {
                    href: "https://www.working-dog.com/dogs-details/2574/Ora-SLR-MN-003"
                  }
                }
              ],
              link: {
                href: "https://www.working-dog.com/dogs-details/60291/Ives--HR-10506"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/60283/Oti--HR-10510-Mato"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/926547/Astra--HR-10639"
      }
    }
  ],
  link: {
    href: "https://www.working-dog.com/dogs-details/1020407/Dina-od-Slunja"
  }
};

chart_data.kali = {
  text: {
    name: "Kali od Bile-Vlake"
  },
  connectors: {},
  stackChildren: true,
  children: [
    {
      text: {
        name: "Yimmy van Contra"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Larus von Batu"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Yasko vom Farbenspiel"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/72684/Yasko-vom-Farbenspiel"
              }
            },
            {
              text: {
                name: "Jitta von Batu"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/84500/Jitta-von-Batu"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/84469/Larus-von-Batu"
          }
        },
        {
          text: {
            name: "Leah van Contra"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Harto von Sendling"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/507891/Harto-von-Sendling"
              }
            },
            {
              text: {
                name: "Remy van Contra"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/507934/Remy-van-Contra"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/507890/Leah-van-Contra"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/507876/Yimmy-van-Contra"
      }
    },
    {
      text: {
        name: "Dakota od Bile-Vlake"
      },
      connectors: {},
      stackChildren: true,
      children: [
        {
          text: {
            name: "Roy Tepelung"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Climba Angel Delight"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/738065/Cimba--Angel-Delight"
              }
            },
            {
              text: {
                name: "Rino Tepelung"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/914483/Rino--Tepelung"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/917511/Roy--Tepelung"
          }
        },
        {
          text: {
            name: "Reike od Bile-Vlake"
          },
          connectors: {},
          stackChildren: true,
          children: [
            {
              text: {
                name: "Rambo von Mons Claudius"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/738372/Reike-od-Bile-Vlake"
              }
            },
            {
              text: {
                name: "Bepa od Svete Klare"
              },
              connectors: {},
              stackChildren: true,
              children: [],
              link: {
                href: "https://www.working-dog.com/dogs-details/729488/Bepa-od-Svete-Klare"
              }
            }
          ],
          link: {
            href: "https://www.working-dog.com/dogs-details/738372/Reike-od-Bile-Vlake"
          }
        }
      ],
      link: {
        href: "https://www.working-dog.com/dogs-details/740022/Dakota-od-Bile-Vlake"
      }
    }
  ],
  link: {
    href: "https://www.working-dog.com/dogs-details/2712146/Kali-od-Bile-Vlake"
  }
};
