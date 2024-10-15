# KpoppingAPI Wrapper

> A JavaScript wrapper for the **[unofficial KpoppingAPI](https://kpopping-api.higanbna.xyz)**. This wrapper simplifies the process of making API calls to retrieve images & information about K-pop idols and groups from the api!.

>What is Kpopping API?
Essentially it's a webscraping api that scrapes data such as images, idol profile, group profile.
---
## Installation

> To use the KpoppingAPI Wrapper in your project, you can install it via npm:

```sh
npm install kpoppingapi-wrapper
```
---
## Usage Documentation

| Methods        | First Param           | Optional Param  |
| ------------- |:-------------:| -----:|
|getIdolpics     | Idol Name | Group Nam |
| getGroupImages      | Group Name      |  -  |
|getProfileData | Idol/Group Name     |   Group Name |

```javascript
const KpoppingApi = require('kpoppingapi-wrapper');
const api = new KpoppingApi();

api.getIdolpics("nayeon")
  .then(images => {
    console.log(images);
  })
  .catch(err => {
    console.error(err);
  });
```

**Optional Param is used for specific cases where Idols have the same name**

On the main website [kpopping.com], where the API scrapes data from, idols with identical names are separated by appending numbers to their name.
- `Hyein` from Melody Pink `Hyein` / `https://kpopping.com/profiles/idol/Hyein`
- `Hyein` from PINK BLING `Hyein2` / `https://kpopping.com/profiles/idol/Hyein2`
- `Hyein` stage name of singer Yoo Hye In `Hyein3` / `https://kpopping.com/profiles/idol/Hyein3`
- `Hyein` from NewJeans `Hyein4` / `https://kpopping.com/profiles/idol/Hyein4`

---

# Responses

- `getIdolpics("nayeon")`
```
{
  "IdolName": "nayeon",
  "title": "230709 TWICE Nayeon & Mina - ‘READY TO BE’ World Tour in Atlanta",
  "images": [
    "https://kpopping.com/documents/f1/0/1536/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-2.jpeg?v=95233",
    "https://kpopping.com/documents/4b/1/1536/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-1.jpeg?v=95233",
    "https://kpopping.com/documents/cc/3/1536/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-3.jpeg?v=95233",
    "https://kpopping.com/documents/26/4/2731/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-1(1).jpeg?v=5bff1",
    "https://kpopping.com/documents/a8/1/2731/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-2(1).jpeg?v=5bff1",
    "https://kpopping.com/documents/96/3/2731/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-3(1).jpeg?v=5bff1",
    "https://kpopping.com/documents/e6/1/2731/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-4.jpeg?v=5bff1",
    "https://kpopping.com/documents/e8/1/2730/230709-TWICE-Nayeon-Mina-READY-TO-BE-World-Tour-in-Atlanta-documents-1(2).jpeg?v=aca46"
  ]
}
```
---
 - `getGroupImages("red velvet")`
 
```
{
  "groupName": "red-velvet",
  "images": [
    "https://kpopping.com/documents/c3/2/1080/210827-Red-Velvet-Instagram-Update-documents-1.jpeg?v=a6674",
    "https://kpopping.com/documents/9f/1/1080/210827-Red-Velvet-Instagram-Update-documents-2.jpeg?v=a6674",
    "https://kpopping.com/documents/56/0/960/210827-Red-Velvet-Instagram-Update-documents-3.jpeg?v=fcd9b",
    "https://kpopping.com/documents/ff/2/1080/210827-Red-Velvet-Instagram-Update-documents-4.jpeg?v=a6674",
    "https://kpopping.com/documents/5c/0/1080/210827-Red-Velvet-Instagram-Update-documents-5.jpeg?v=a6674",
    "https://kpopping.com/documents/42/4/1080/210827-Red-Velvet-Instagram-Update-documents-6.jpeg?v=f4465"
  ]
}
```
---
- `getProfileData("nayeon")`

```
{
  "IdolName": "Nayeon",
  "Hometown": "Seoul",
  "Country": "South Korea",
  "Fullname": "Im Na-yeon",
  "Nativename": "임나연",
  "Birthday": "Sep 22, 1995",
  "Age": "27 years old",
  "Bloodtype": "A",
  "Height": "5'4\" (163 cm)",
  "Weight": "105.8 lbs (48 kg)",
  "Group": {
    "Current": "TWICE"
  },
  "Agencies": {
    "Current": "JYP Entertainment",
    "Previous": "N/A"
  },
  "Debut": "Oct 20, 2015",
  "Debutto1stWin": "198 days",
  "CurrentState": "active",
  "ActiveYears": "2017-present",
  "ZodiacSign": "Virgo",
  "Languages": "Korean, Japanese",
  "TrainingPeriod": "2010 - 2015",
  "Education": "KonKuk University",
  "MBTI": "ISTP-A",
  "KpoppingRank": "17th",
  "RepresentativeColor": "Sky-Blue[#87ceeb]",
  "Fandom": "ONCE",
  "FandomColors": "Apricot[#FEC99A], Neon-Magenta[#FF5FA2]",
  "Awards": "5"
}
```
---
- `getProfileData("bts")`

```
{
  "GroupImage": "https://kpopping.com/documents/14/2/850/BTS-fullPicture(2).webp?v=f6d61",
  "GroupName": "BTS",
  "CurrentState": "in hiatus",
  "Agencies": {
    "Current": "HYBE Labels, Def Jam Japan, BIGHIT MUSIC, Tristone Entertainment, Universal Music Group",
    "Previous": "Columbia Records, Def Jam France, Pony Canyon"
  },
  "SubGroup": "N/A",
  "DebutDate": "Jun 13, 2013",
  "Debutto1stWin": "691 days",
  "ActiveYears": "2013-present",
  "Country": "South Korea",
  "MostPopularMember": "V",
  "KpoppingRank": "1st",
  "Fandom": "ARMY",
  "FandomColors": "Purple[#A020F0]",
  "Awards": "164",
  "Albums": "44",
  "Members": {
    "1": {
      "Name": "Jin",
      "Birthday": "Dec 4, 1992",
      "Age": "30 years old",
      "Birthplace": "Anyang, Gyeonggi-do   South Korea",
      "Height": "5'11\" (179 cm)",
      "Weight": "145.5 lbs (66 kg)",
      "ZodiacSign": "Sagittarius",
      "bloodtype": "0",
      "MBTI": "INTP",
      "Position": "Sub Vocalist, Visual"
    },
    "2": {
      "Name": "SUGA",
      "Birthday": "Mar 9, 1993",
      "Age": "30 years old",
      "Birthplace": "Daegu   South Korea",
      "Height": "5'9\" (174 cm)",
      "Weight": "134.5 lbs (61 kg)",
      "ZodiacSign": "Pisces",
      "bloodtype": "0",
      "MBTI": "ISTP",
      "Position": "Lead Rapper"
    },
    "3": {
      "Name": "j-hope",
      "Birthday": "Feb 18, 1994",
      "Age": "29 years old",
      "Birthplace": "Gwangju   South Korea",
      "Height": "5'10\" (177 cm)",
      "Weight": "130.1 lbs (59 kg)",
      "ZodiacSign": "Aquarius",
      "bloodtype": "A",
      "MBTI": "INFJ",
      "Position": "Main Dancer, Sub Rapper, Sub Vocalist"
    },
    "4": {
      "Name": "RM",
      "Birthday": "Sep 12, 1994",
      "Age": "28 years old",
      "Birthplace": "Goyang   South Korea",
      "Height": "5'11\" (181 cm)",
      "Weight": "167.6 lbs (76 kg)",
      "ZodiacSign": "Virgo",
      "bloodtype": "A",
      "MBTI": "ENFP",
      "Position": "Leader, Main Rapper"
    },
    "5": {
      "Name": "Jimin",
      "Birthday": "Oct 13, 1995",
      "Age": "27 years old",
      "Birthplace": "Busan   South Korea",
      "Height": "5'9\" (174 cm)",
      "Weight": "143.3 lbs (65 kg)",
      "ZodiacSign": "Libra",
      "bloodtype": "A",
      "MBTI": "ESTP",
      "Position": "Main Dancer, Lead Vocalist"
    },
    "6": {
      "Name": "V",
      "Birthday": "Dec 30, 1995",
      "Age": "27 years old",
      "Birthplace": "Daegu   South Korea",
      "Height": "5'11\" (179 cm)",
      "Weight": "136.7 lbs (62 kg)",
      "ZodiacSign": "Capricorn",
      "bloodtype": "AB",
      "MBTI": "INFP",
      "Position": "Lead Dancer, Sub Vocalist, Visual"
    },
    "7": {
      "Name": "Jungkook",
      "Birthday": "Sep 1, 1997",
      "Age": "26 years old",
      "Birthplace": "Busan   South Korea",
      "Height": "5'11\" (179 cm)",
      "Weight": "156.5 lbs (71 kg)",
      "ZodiacSign": "Virgo",
      "bloodtype": "A",
      "MBTI": "INTP",
      "Position": "Main Vocalist, Lead Dancer, Sub Rapper, Center, Maknae"
    }
  }
}

```
---
## License
```
MIT License

Copyright (c) 2023 ivAkii

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
---
## Disclaimer 
>Please note that the KpoppingAPI Wrapper is based on the unofficial KpoppingAPI. Use it responsibly and adhere to the terms and conditions set by the main website kpopping.com <3.

 `iv.akii.ouo@gmail.com`
 
 ---
## Contribution

##### If you find any issues with the wrapper or would like to contribute to its improvement, feel free to open an issue or submit a pull request on **[GitHub](https://github.com/ivAkii/kpoppingapi-wrapper)**

---
> Contact me via mail `iv.akii.ouo@gmail.com`.