const arr = [
  {
    title: "(Renewed) Apple iPhone XR, US Version, 64GB, White - Unlocked",
    price: "$314.00",
    link: "https://amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P978C2R/ref=sr_1_1?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-1",
  },
  {
    title:
      "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed Premium)",
    price: "$389.96",
    link: "https://amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B08BDTL7NP/ref=sr_1_2?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-2",
  },
  {
    title: "Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked (Renewed)",
    price: "$950.00",
    link: "https://amazon.com/Apple-iPhone-Pro-128GB-Gold/dp/B08PL87YMK/ref=sr_1_3?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-3",
  },
  {
    title:
      "Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)",
    price: "$779.00",
    link: "https://amazon.com/Apple-iPhone-256GB-Midnight-Green/dp/B08BHXC5ZS/ref=sr_1_4?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-4",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$1,099.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_5?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-5",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$1,051.24",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF9WMR9/ref=sr_1_6?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-6",
  },
  {
    title:
      "(Refurbished) Apple iPhone 11 Pro Max, US Version, 256GB, Silver - Unlocked",
    price: "$677.99",
    link: "https://amazon.com/Apple-iPhone-Pro-256GB-Silver/dp/B07ZQSSJVQ/ref=sr_1_7?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-7",
  },
  {
    title:
      "Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$1,030.96",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_8?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-8",
  },
  {
    title: "Apple iPhone 12 Pro, 128GB, Gold - Unlocked (Renewed Premium)",
    price: "$938.34",
    link: "https://amazon.com/Apple-iPhone-12-Pro-128GB/dp/B09JFC967X/ref=sr_1_9?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-9",
  },
  {
    title: "Apple Simple Mobile Prepaid - Apple iPhone X (64GB) - Silver",
    price: null,
    link: "https://amazon.com/Apple-iPhone-64GB-Silver-Prepaid/dp/B078HVJB69/ref=sr_1_10?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-10",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 512GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$1,323.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFGT21S/ref=sr_1_11?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-11",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 128GB, Graphite - Unlocked (Renewed Premium)",
    price: "$1,064.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFSMFB5/ref=sr_1_12?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-12",
  },
  {
    title:
      "(Renewed) Apple iPhone XS, US Version, 256GB, Space Gray - Unlocked",
    price: "$389.00",
    link: "https://amazon.com/Apple-iPhone-Fully-Unlocked-256/dp/B07TJBCC7H/ref=sr_1_13?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-13",
  },
  {
    title: "(Renewed) Apple iPhone XS Max, US Version, 64GB, Gold - Unlocked",
    price: "$391.99",
    link: "https://amazon.com/Apple-iPhone-Max-Fully-Unlocked/dp/B07KFMTWVF/ref=sr_1_14?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-14",
  },
  {
    title: "Apple iPhone 11, 64GB, Purple - Unlocked (Renewed Premium)",
    price: "$551.00",
    link: "https://amazon.com/Apple-iPhone-11-64GB-Purple/dp/B011SDYBZW/ref=sr_1_15?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-15",
  },
  {
    title: "Apple iPhone 12 Pro, 512GB, Graphite - Unlocked (Renewed Premium)",
    price: "$1,218.71",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Graphite/dp/B09JFS4P67/ref=sr_1_16?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-16",
  },
  {
    title:
      "BluetoothWireless Earbuds, Bluetooth 5.0 Earphones, airpod Charging case, Air Buds in-Ear Ear Buds Built-in Mic IPX7 Pop-ups Auto Pairing Apple Android iPhone",
    price: "$29.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A091197730HW8H8I974NN&url=%2FBluetoothWireless-Earbuds-Bluetooth-Earphones-Charging%2Fdp%2FB09MFKTMP4%2Fref%3Dsr_1_17_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-17-spons%26psc%3D1%26smid%3DAQS0LMYBAXXI&qualifier=1641580242&id=3798588722323886&widgetName=sp_atf_next",
  },
  {
    title:
      "USB C Car Charger Adapter,QGeeM 30W Super Mini Type C Power Delivery PD Fast Car Charger Compatible with iPhone12/12 Pro Max/12 Mini/iPhone 11/Pro Max/XR/XS/Max/8/8P,iPad Pro,MacBook,AirPods",
    price: "$6.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A0421573WZ8BIPGHHUL6&url=%2FCharger-QGeeM-Delivery-Compatible-iPhone12%2Fdp%2FB096KRTWPB%2Fref%3Dsr_1_18_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-18-spons%26psc%3D1&qualifier=1641580242&id=3798588722323886&widgetName=sp_atf_next",
  },
  {
    title:
      "Tracfone Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked",
    price: null,
    link: "https://amazon.com/Tracfone-Apple-iPhone-Prepaid-Smartphone/dp/B08CL4CCG2/ref=sr_1_19?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-19",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 256GB, Graphite - Unlocked (Renewed Premium)",
    price: "$1,150.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFS16CP/ref=sr_1_20?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-20",
  },
  {
    title: "Apple iPhone 12 Pro, 128GB, Graphite - Unlocked (Renewed Premium)",
    price: "$949.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Graphite/dp/B09JF5ZHQS/ref=sr_1_21?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-21",
  },
  {
    title: "Apple iPhone 12 Pro Max, 128GB, Gold - Unlocked (Renewed Premium)",
    price: "$1,064.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFP32Y5/ref=sr_1_22?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-22",
  },
  {
    title:
      "Total Wireless Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked",
    price: null,
    link: "https://amazon.com/Total-Wireless-iPhone-Prepaid-Smartphone/dp/B08CL482JL/ref=sr_1_23?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-23",
  },
  {
    title: "Apple iPhone 12 Pro Max, 256GB, Gold - Unlocked (Renewed Premium)",
    price: "$1,064.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF3TGRV/ref=sr_1_24?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-24",
  },
  {
    title: "(Renewed) Apple iPhone XS, US Version, 64GB, Space Gray - Unlocked",
    price: "$332.00",
    link: "https://amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07SC58QBW/ref=sr_1_25?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-25",
  },
  {
    title: "Apple iPhone 11, US Version, 128GB, Green - Unlocked (Renewed)",
    price: "$509.99",
    link: "https://amazon.com/Apple-iPhone-11-128GB-Unlocked/dp/B07ZPK3KWH/ref=sr_1_26?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-26",
  },
  {
    title: "Apple iPhone 12 Pro, 256GB, Graphite - Fully Unlocked (Renewed)",
    price: "$1,250.00",
    link: "https://amazon.com/Apple-iPhone-Pro-256GB-Graphite/dp/B08PN7ZG7F/ref=sr_1_27?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-27",
  },
  {
    title: "Apple iPhone 11 Pro, 256GB, Midnight Green - Unlocked (Renewed)",
    price: "$600.00",
    link: "https://amazon.com/Apple-iPhone-256GB-Midnight-Green/dp/B07ZQPYXJP/ref=sr_1_28?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-28",
  },
  {
    title: "(Renewed) Apple iPhone 8, US Version, 64GB, Space Gray - Unlocked",
    price: "$212.00",
    link: "https://amazon.com/Apple-iPhone-GSM-Unlocked-64GB/dp/B0775MV9K2/ref=sr_1_29?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-29",
  },
  {
    title: "Apple iPhone 12 Mini, 64GB, Black - Fully Unlocked (Renewed)",
    price: "$519.00",
    link: "https://amazon.com/Apple-iPhone-12-Mini-Black/dp/B08PPDJWC8/ref=sr_1_30?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-30",
  },
  {
    title: "(Renewed) Apple iPhone 12, 64GB, Blue - Fully Unlocked",
    price: "$649.00",
    link: "https://amazon.com/Apple-iPhone-12-64GB-Blue/dp/B08PNM1LNZ/ref=sr_1_31?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-31",
  },
  {
    title:
      "Apple iPhone SE (2nd Generation), US Version, 64GB, White - Unlocked (Renewed)",
    price: "$291.99",
    link: "https://amazon.com/Apple-iPhone-SE-64GB-White/dp/B088NQSLGN/ref=sr_1_32?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-32",
  },
  {
    title:
      "Intoval Wireless Charger, 3 in 1 Charger for iPhone/iWatch/Airpods, Qi-Certified Charging Station for iPhone 13/12/11/Pro/Max/XS/Max/XR/XS/X, iWatch 7/6/SE/5/4/3/2, Airpods Pro/3/2/1 (Z5,White)",
    price: "$49.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg3_1?ie=UTF8&adId=A027266834HBG0587TUXE&url=%2FIntoval-Wireless-Charging-Certified-Qi-Enabled%2Fdp%2FB07ZCCVL5Q%2Fref%3Dsr_1_33_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-33-spons%26psc%3D1&qualifier=1641580242&id=6750499159036415&widgetName=sp_atf_next",
  },
  {
    title:
      "iPhone USB C to Lightning Cable, [MFi Certified] 3Pack 6ft Fast iPhone Charging Cable, Lightning to Type C Cord for iPhone 12/12 Mini/12 Pro/11 Pro Max/X/XS/XR/8, iPad 8th",
    price: "$15.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg3_1?ie=UTF8&adId=A082655730D3FDBQ8OZUQ&url=%2FiPhone-Lightning-Cable-Certified-Charging%2Fdp%2FB09F6FLYW9%2Fref%3Dsr_1_34_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-34-spons%26psc%3D1&qualifier=1641580242&id=6750499159036415&widgetName=sp_atf_next",
  },
  {
    title:
      "SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Silver",
    price: "$1,199.99",
    link: "https://amazon.com/Samsung-Unlocked-Smartphone-Pro-Grade-SM-G998UZSAXAA/dp/B08N3BYNDN/ref=sr_1_35?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-35",
  },
  {
    title:
      "Apple iPhone XS, 512GB, Space Gray - GSM Carriers (Renewed Premium)",
    price: "$548.00",
    link: "https://amazon.com/Apple-iPhone-512GB-Space-Gray/dp/B08BJH6J3C/ref=sr_1_36?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-36",
  },
  {
    title: "Apple Simple Mobile Prepaid - Apple iPhone 7 (32GB) - Black",
    price: null,
    link: "https://amazon.com/Apple-iPhone-32GB-Black-Prepaid/dp/B01N2K14U7/ref=sr_1_37?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-37",
  },
  {
    title: "Apple iPhone 5C 32 GB Sprint, Green",
    price: null,
    link: "https://amazon.com/Apple-iPhone-5C-Sprint-Green/dp/B00F3IIVV4/ref=sr_1_38?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-38",
  },
  {
    title:
      "ASUS ROG Phone (ZS600KL) 6.0 inchs with 8GB RAM / 512GB Storage, (GSM ONLY, NO CDMA) Factory Unlocked International Version No-Warranty Cell Phone (Black)",
    price: null,
    link: "https://amazon.com/ASUS-ZS600KL-6-0-inches-Factory-Unlocked/dp/B07HY5C4HW/ref=sr_1_39?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-39",
  },
  {
    title:
      "Total Wireless Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked",
    price: null,
    link: "https://amazon.com/Total-Wireless-iPhone-Prepaid-Smartphone/dp/B08CL482JL/ref=sr_1_40?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-40",
  },
  {
    title: "(Renewed) Apple iPhone XS, US Version, 64GB, Space Gray - Unlocked",
    price: "$332.00",
    link: "https://amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07SC58QBW/ref=sr_1_41?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-41",
  },
  {
    title: "Apple iPhone 12 Pro Max, 512GB, Gold - Unlocked (Renewed Premium)",
    price: "$1,305.64",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFRP37T/ref=sr_1_42?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-42",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 512GB, Graphite - Unlocked (Renewed Premium)",
    price: "$1,302.19",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFQ9G5Z/ref=sr_1_43?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-43",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 256GB, Silver - Unlocked (Renewed Premium)",
    price: "$1,141.62",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFRWDD8/ref=sr_1_44?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-44",
  },
  {
    title:
      "Samsung Galaxy A72 A725F-DS 4G Dual 256GB 8GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Awesome White",
    price: "$494.00",
    link: "https://amazon.com/Samsung-A72-A725F-DS-Factory-Unlocked/dp/B092LHG21G/ref=sr_1_45?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-45",
  },
  {
    title:
      "Apple iPhone 11 [64GB, Purple] + Carrier Subscription [Cricket Wireless]",
    price: null,
    link: "https://amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSMNRD/ref=sr_1_46?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-46",
  },
  {
    title:
      "Apple iPhone 12 Pro, 512GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$1,193.78",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFC8JGG/ref=sr_1_47?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-47",
  },
  {
    title: "Apple iPhone 12 Pro Max, 256GB, Gold - Unlocked (Renewed Premium)",
    price: "$1,064.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF3TGRV/ref=sr_1_48?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-48",
  },
  {
    title:
      'SAIJI Tablet Stand Holder, Height Adjustable, 360 Degree Rotating, Aluminum Alloy Cradle Mount Dock for 4.7"-12.9" Screen iPhone Samsung, iPad, Kindle, eBook Reader (Silver)',
    price: "$34.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg4_1?ie=UTF8&adId=A0193044PRYHDQU7TQP3&url=%2FSaiji-Adjustable-Rotating-Aluminum-4-7-12-9%2Fdp%2FB07GR37JY1%2Fref%3Dsr_1_49_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-49-spons%26psc%3D1&qualifier=1641580242&id=2703193789566306&widgetName=sp_atf_next",
  },
  {
    title:
      "AKIE USB C Charger, 20W Fast iPhone Charger, Compact and Portable, PD 3.0 Technology, Compatible with iPhone 13 iPhone 12 iPhone 11 iPhone Xs iPhone X iPad, P20MCH01, White",
    price: "$12.99",
    link: "https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg4_1?ie=UTF8&adId=A09599642CS1QMOIPF65W&url=%2FAKIE-Portable-Technology-Compatible-P20MCH01%2Fdp%2FB09JP54NDD%2Fref%3Dsr_1_50_sspa%3Fkeywords%3Diphone%26qid%3D1641580242%26sprefix%3Diphone%252Caps%252C262%26sr%3D8-50-spons%26psc%3D1&qualifier=1641580242&id=2703193789566306&widgetName=sp_atf_next",
  },
  {
    title: "Apple iPhone 7, 128GB, Rose Gold - For GSM (Renewed)",
    price: "$214.99",
    link: "https://amazon.com/Apple-iPhone-GSM-Unlocked-128GB/dp/B01MSEPCPU/ref=sr_1_51?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-51",
  },
  {
    title:
      "Apple iPhone Xs, 64GB, Space Gray - Fully Unlocked (Renewed Premium)",
    price: "$396.00",
    link: "https://amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B08BFCV8NN/ref=sr_1_52?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-52",
  },
  {
    title:
      "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Orange",
    price: "$699.99",
    link: "https://amazon.com/Samsung-Factory-Unlocked-Smartphone-Pro-Grade/dp/B08FYVHB8Z/ref=sr_1_53?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-53",
  },
  {
    title:
      "i12 Pro MAX Unlocked Smartphone, 6.26in HD Screen Mobile Phone, 1+8G Dual Sim Cell Phone for Android 8.1 Gold(US)",
    price: "$118.39",
    link: "https://amazon.com/Unlocked-Smartphone-6-26in-Screen-Android/dp/B08RZ4D19Y/ref=sr_1_54?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-54",
  },
  {
    title: "Apple iPhone XS Max, 64GB, Gold - For Cricket Wireless (Renewed)",
    price: "$450.00",
    link: "https://amazon.com/Apple-iPhone-Max-64GB-Gold/dp/B089QT4389/ref=sr_1_55?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-55",
  },
  {
    title:
      "I12 Pro Max Unlocked Smartphone-Stylish 6.26Inch Bang Screen Cellphone 1+8GB Dual Card Dual Standby Android Smartphone Support for WIFI,Bluetooth,Face Recognition and Memory Expansion(Gold)(US plug)",
    price: "$117.95",
    link: "https://amazon.com/Smartphone-Stylish-Cellphone-Smartphone-Bluetooth-Recognition/dp/B0957HWQJ8/ref=sr_1_56?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-56",
  },
  {
    title: "Apple iPhone Xs, 64GB, Gold - GSM Unlocked (Renewed Premium)",
    price: "$396.00",
    link: "https://amazon.com/Apple-iPhone-Xs-64GB-Gold/dp/B08BJHQVBV/ref=sr_1_57?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-57",
  },
  {
    title:
      "TCL 20S Unlocked Android Smartphone with 6.67” Dotch FHD+ Display, 64MP Quad Rear Camera System, 128GB+4GB RAM, 5000mAh Battery with Fast Charging, North Star Blue",
    price: "$249.99",
    link: "https://amazon.com/TCL-Unlocked-Android-Smartphone-Charging/dp/B095KG7NVY/ref=sr_1_58?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-58",
  },
  {
    title: "Apple iPhone 12, 128GB, Blue - Unlocked (Renewed Premium)",
    price: "$833.26",
    link: "https://amazon.com/Apple-iPhone-12-128GB-Blue/dp/B09JFP6L1F/ref=sr_1_59?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-59",
  },
  {
    title:
      "I12 Pro Max Unlocked Smartphone-Stylish 6.26Inch Bang Screen Cellphone 1+8GB Dual Card Dual Standby Android Smartphone Support for WIFI,Bluetooth,Face Recognition and Memory Expansion(Blue)(US plug)",
    price: "$118.99",
    link: "https://amazon.com/Smartphone-Stylish-Cellphone-Smartphone-Bluetooth-Recognition/dp/B0957H61GW/ref=sr_1_60?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-60",
  },
  {
    title:
      "Apple iPhone 12 Pro, 128GB, Pacific Blue - Unlocked (Renewed Premium)",
    price: "$949.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_61?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-61",
  },
  {
    title:
      "Apple iPhone 12 Pro Max, 512GB, Silver - Unlocked (Renewed Premium)",
    price: "$1,323.00",
    link: "https://amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFRKPKQ/ref=sr_1_62?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-62",
  },
  {
    title: "Unlocked Google Pixel 4 - 64GB - Just Black - GA01187-US (Renewed)",
    price: "$260.00",
    link: "https://amazon.com/Unlocked-Google-Pixel-GA01187-US-Renewed/dp/B082YF9MMW/ref=sr_1_63?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-63",
  },
  {
    title:
      "SAMSUNG Galaxy Z Fold 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Tablet 2-in-1 Foldable Dual Screen Under Display Camera 256GB Storage, Phantom Green",
    price: null,
    link: "https://amazon.com/SAMSUNG-Factory-Unlocked-Smartphone-Foldable/dp/B097CMYTLD/ref=sr_1_64?keywords=iphone&qid=1641580242&sprefix=iphone%2Caps%2C262&sr=8-64",
  },
];

module.exports = arr;
