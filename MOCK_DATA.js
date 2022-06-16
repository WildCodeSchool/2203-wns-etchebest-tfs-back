const users=[
  {
    firstname: "Reeva",
    lastname: "Sear",
    email: "rsear0@europa.eu",
    password: "eVPhmHw",
    comments: {
      create: [
        {
          content: "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Corinna",
    lastname: "Squeers",
    email: "csqueers1@eepurl.com",
    password: "uTW55X",
    comments: {
      create: [
        {
          content: "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam"
        },
        {
          content: "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum"
        },
        {
          content: "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "dapibus dolor vel",
          description: "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante",
          status: "Testing",
          project: {
            create: {
              subject: "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis"
            }
          }
        },
        {
          title: "aliquet",
          description: "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
          status: "Testing",
          project: {
            create: {
              subject: "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes"
            }
          }
        },
        {
          title: "tortor",
          description: "elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
          status: "Done",
          project: {
            create: {
              subject: "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Andre",
    lastname: "Stinson",
    email: "astinson2@gmpg.org",
    password: "POYUNvB7fX",
    comments: {
      create: []
    },
    tickets_author: {
      create: [
        {
          title: "semper est quam",
          description: "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
          status: "Testing",
          project: {
            create: {
              subject: "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Corinne",
    lastname: "D'Emanuele",
    email: "cdemanuele3@guardian.co.uk",
    password: "t8SwsK5es",
    comments: {
      create: [
        {
          content: "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "pede ac",
          description: "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis",
          status: "In Progress",
          project: {
            create: {
              subject: "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris"
            }
          }
        },
        {
          title: "turpis sed ante vivamus",
          description: "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
          status: "Done",
          project: {
            create: {
              subject: "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo"
            }
          }
        },
        {
          title: "nonummy maecenas tincidunt lacus",
          description: "sed magna at nunc commodo placerat praesent blandit nam nulla integer",
          status: "Done",
          project: {
            create: {
              subject: "leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Brenna",
    lastname: "Valois",
    email: "bvalois4@flavors.me",
    password: "GHGRYJVyoRTN",
    comments: {
      create: [
        {
          content: "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet"
        },
        {
          content: "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "vitae ipsum aliquam non",
          description: "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
          status: "In Progress",
          project: {
            create: {
              subject: "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Masha",
    lastname: "Dodworth",
    email: "mdodworth5@bigcartel.com",
    password: "oSPyDaKe79",
    comments: {
      create: [
        {
          content: "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna"
        },
        {
          content: "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "odio justo sollicitudin",
          description: "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt",
          status: "To Do",
          project: {
            create: {
              subject: "egestas metus aenean fermentum donec ut mauris eget massa tempor"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Jessie",
    lastname: "Hinchon",
    email: "jhinchon6@google.co.jp",
    password: "abBSaZ",
    comments: {
      create: [
        {
          content: "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "quis",
          description: "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
          status: "Done",
          project: {
            create: {
              subject: "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla"
            }
          }
        },
        {
          title: "sagittis",
          description: "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
          status: "In Progress",
          project: {
            create: {
              subject: "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis"
            }
          }
        },
        {
          title: "quis turpis sed",
          description: "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
          status: "To Do",
          project: {
            create: {
              subject: "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Sidoney",
    lastname: "Seargeant",
    email: "sseargeant7@theglobeandmail.com",
    password: "CbsT02KVCMW",
    comments: {
      create: [
        {
          content: "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        },
        {
          content: "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "gravida nisi at",
          description: "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
          status: "Testing",
          project: {
            create: {
              subject: "potenti in eleifend quam a odio in hac habitasse platea"
            }
          }
        },
        {
          title: "varius",
          description: "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
          status: "Testing",
          project: {
            create: {
              subject: "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Nolan",
    lastname: "Evett",
    email: "nevett8@nhs.uk",
    password: "LeD0PGvZEN5b",
    comments: {
      create: [
        {
          content: "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est"
        },
        {
          content: "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Goldi",
    lastname: "Ricciardelli",
    email: "gricciardelli9@mediafire.com",
    password: "3HaiHWO",
    comments: {
      create: [
        {
          content: "nam congue risus semper porta volutpat quam pede lobortis ligula"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "dapibus dolor",
          description: "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
          status: "Done",
          project: {
            create: {
              subject: "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris"
            }
          }
        },
        {
          title: "bibendum imperdiet nullam",
          description: "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
          status: "Testing",
          project: {
            create: {
              subject: "ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit"
            }
          }
        },
        {
          title: "orci vehicula condimentum",
          description: "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
          status: "In Progress",
          project: {
            create: {
              subject: "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Shay",
    lastname: "Elgar",
    email: "selgara@rediff.com",
    password: "phOlZf",
    comments: {
      create: [
        {
          content: "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "diam",
          description: "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
          status: "Done",
          project: {
            create: {
              subject: "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Izabel",
    lastname: "Matresse",
    email: "imatresseb@angelfire.com",
    password: "ZfSSAehwpRP",
    comments: {
      create: [
        {
          content: "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis"
        },
        {
          content: "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Saxon",
    lastname: "Dayne",
    email: "sdaynec@is.gd",
    password: "z6s8cj",
    comments: {
      create: [
        {
          content: "arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac"
        },
        {
          content: "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Florenza",
    lastname: "MacWhirter",
    email: "fmacwhirterd@webmd.com",
    password: "obOAU8yQ",
    comments: {
      create: [
        {
          content: "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "nisl nunc nisl duis",
          description: "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
          status: "In Progress",
          project: {
            create: {
              subject: "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue"
            }
          }
        },
        {
          title: "eu nibh quisque",
          description: "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
          status: "Testing",
          project: {
            create: {
              subject: "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo"
            }
          }
        },
        {
          title: "eu interdum eu",
          description: "aenean sit amet justo morbi ut odio cras mi pede malesuada in",
          status: "To Do",
          project: {
            create: {
              subject: "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Diandra",
    lastname: "Donett",
    email: "ddonette@gnu.org",
    password: "OPjaVRYOBj",
    comments: {
      create: [
        {
          content: "dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien"
        },
        {
          content: "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis"
        },
        {
          content: "quisque erat eros viverra eget congue eget semper rutrum nulla"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "vestibulum aliquet",
          description: "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
          status: "To Do",
          project: {
            create: {
              subject: "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Sandy",
    lastname: "Ralph",
    email: "sralphf@godaddy.com",
    password: "umbtBQr70jsc",
    comments: {
      create: [
        {
          content: "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper"
        },
        {
          content: "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Tiff",
    lastname: "Poundsford",
    email: "tpoundsfordg@goo.ne.jp",
    password: "nmGdGtC",
    comments: {
      create: [
        {
          content: "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis"
        },
        {
          content: "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus"
        },
        {
          content: "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien"
        }
      ]
    },
    tickets_author: {
      create: []
    }
  },
  {
    firstname: "Brit",
    lastname: "Leworthy",
    email: "bleworthyh@apple.com",
    password: "m24LLI8InljN",
    comments: {
      create: [
        {
          content: "eu orci mauris lacinia sapien quis libero nullam sit amet"
        }
      ]
    },
    tickets_author: {
      create: [
        {
          title: "maecenas tristique est et",
          description: "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
          status: "Done",
          project: {
            create: {
              subject: "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Pippy",
    lastname: "Nutkins",
    email: "pnutkinsi@nifty.com",
    password: "vbf1n9gc",
    comments: {
      create: []
    },
    tickets_author: {
      create: [
        {
          title: "eu",
          description: "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
          status: "Done",
          project: {
            create: {
              subject: "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus"
            }
          }
        }
      ]
    }
  },
  {
    firstname: "Eugene",
    lastname: "Pietrasik",
    email: "epietrasikj@seattletimes.com",
    password: "akMp2W",
    comments: {
      create: []
    },
    tickets_author: {
      create: [
        {
          title: "massa volutpat",
          description: "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
          status: "To Do",
          project: {
            create: {
              subject: "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam"
            }
          }
        },
        {
          title: "lectus pellentesque",
          description: "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis",
          status: "Done",
          project: {
            create: {
              subject: "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis"
            }
          }
        },
        {
          title: "cubilia",
          description: "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
          status: "To Do",
          project: {
            create: {
              subject: "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec"
            }
          }
        }
      ]
    }
  }
]