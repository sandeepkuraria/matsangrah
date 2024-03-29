// Sample data for FlatList
const data = [
  {
    id: '1',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '2',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '3',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '4',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '5',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '6',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '7',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '8',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '9',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '10',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '11',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '12',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '13',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '14',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '15',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    panchayatKshetra: 'JABALPUR',
    age: '79',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '16',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '17',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '18',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '19',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '20',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '21',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '1',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '22',
    nameHindi: 'उषा कश्यप',
    nameEnglish: 'usha kashyap',
    fatherHusbandHindi: 'अजीत कुमार',
    fatherHusbandEnglish: 'ajeet kumar',
    ageGender: '79/F',
    hindiName: 'उषा कश्यप / अजीत कुमार',
    englishName: 'usha kashyap / ajeet kumar',
    sectionNumber: '11',
    gender: 'F',
    age: '79',
    panchayatKshetra: 'JABALPUR',
    village: 'khajri',
    panchayat: 'JABALPUR',
    area: 'boria',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'A',
    status: 'उपलब्ध',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '23',
    nameHindi: 'सुशील कुमार',
    nameEnglish: 'susheel kumar',
    fatherHusbandHindi: 'नेकराम',
    fatherHusbandEnglish: 'nekram',
    ageGender: '84/M',
    hindiName: 'सुशील कुमार / नेकराम',
    englishName: 'susheel kumar / nekram',
    sectionNumber: '2',
    gender: 'M',
    panchayatKshetra: 'PATAN',
    age: '84',
    village: 'pawai',
    panchayat: 'PATAN',
    area: 'tarnam',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'अन्य समाज',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'B',
    status: 'मृत',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  {
    id: '24',
    nameHindi: 'संदीप कुररिया',
    nameEnglish: 'sandeep kuraria',
    fatherHusbandHindi: 'रामकिशोर कुररिया',
    fatherHusbandEnglish: 'ramkishor kuraria',
    ageGender: '34/M',
    hindiName: 'संदीप कुररिया / रामकिशोर कुररिया',
    englishName: 'sandeep kuraria / ramkishor kuraria',
    sectionNumber: '3',
    gender: 'M',
    age: '34',
    panchayatKshetra: 'JABALPUR',
    village: 'kankarkheda',
    panchayat: 'JABALPUR',
    area: '44 meal',
    jabalpurPaschimAssembly2024: 'विधानसभा जबलपुर पश्चिम - 2024',
    caste: 'सामान्य',
    houseNumber: '1',
    address: '1',
    mobile: '8435979788',
    dob: '28-03-1989',
    epicNumber: 'KRW2912731',
    priority: 'C',
    status: 'पलायन',
    voteCenter: 'प्राथमिक शाला भवन जबलपुर',
  },
  // Add more data as needed
];
export default data;
