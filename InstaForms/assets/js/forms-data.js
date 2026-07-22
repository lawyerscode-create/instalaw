const FORMS_DATA = [
  {
    "slug": "sale-deed",
    "title": "Sale Deed",
    "act": "Transfer of Property Act, 1882 · Registration Act, 1908",
    "shelf": "Property & Real Estate Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "placeOfExecution",
        "label": "Place of Execution",
        "type": "text"
      },
      {
        "id": "fullNameOfSeller",
        "label": "Full Name of Seller",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "age",
        "label": "Age",
        "type": "text"
      },
      {
        "id": "completeAddressOfSeller",
        "label": "Complete Address of Seller",
        "type": "text"
      },
      {
        "id": "panNumber",
        "label": "PAN Number",
        "type": "text"
      },
      {
        "id": "fullNameOfBuyer",
        "label": "Full Name of Buyer",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName2",
        "label": "Father's/Husband's Name (2)",
        "type": "text"
      },
      {
        "id": "age2",
        "label": "Age (2)",
        "type": "text"
      },
      {
        "id": "completeAddressOfBuyer",
        "label": "Complete Address of Buyer",
        "type": "text"
      },
      {
        "id": "panNumber2",
        "label": "PAN Number (2)",
        "type": "text"
      },
      {
        "id": "modeOfAcquisitionEGPurchaseDeedInheritance",
        "label": "mode of acquisition, e.g. purchase deed / inheritance",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "registrationNumber",
        "label": "Registration Number",
        "type": "text"
      },
      {
        "id": "amountInFigures",
        "label": "Amount in Figures",
        "type": "text"
      },
      {
        "id": "amountInWords",
        "label": "Amount in Words",
        "type": "text"
      },
      {
        "id": "saleConsideration",
        "label": "Sale Consideration",
        "type": "text"
      },
      {
        "id": "eGFlatHousePlotNoBlockBuildingName",
        "label": "e.g. Flat/House/Plot No., Block, Building Name",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "areaInSqFtSqM",
        "label": "Area in sq. ft. / sq. m.",
        "type": "text"
      },
      {
        "id": "locality",
        "label": "Locality",
        "type": "text"
      },
      {
        "id": "districtState",
        "label": "District, State",
        "type": "text"
      },
      {
        "id": "northSouthEastWestBoundaries",
        "label": "North / South / East / West boundaries",
        "type": "textarea"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Sale Deed</h2>\n<p class=\"sub-center\">Executed under the Transfer of Property Act, 1882</p>\n\n<p>THIS DEED OF SALE is executed on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>, at <span class=\"filled\">{{placeOfExecution}}</span>, by:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfSeller}}</span></strong>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>, aged about <span class=\"filled\">{{age}}</span> years,\nresiding at <span class=\"filled\">{{completeAddressOfSeller}}</span>, holding PAN <span class=\"filled\">{{panNumber}}</span> (hereinafter referred to as the \"VENDOR/SELLER\",\nwhich expression shall unless repugnant to the context include his/her heirs, legal representatives, executors and assigns) of the ONE PART;</p>\n\n<p><strong>AND</strong></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfBuyer}}</span></strong>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName2}}</span>, aged about <span class=\"filled\">{{age2}}</span> years,\nresiding at <span class=\"filled\">{{completeAddressOfBuyer}}</span>, holding PAN <span class=\"filled\">{{panNumber2}}</span> (hereinafter referred to as the \"VENDEE/BUYER\",\nwhich expression shall unless repugnant to the context include his/her heirs, legal representatives, executors and assigns) of the OTHER PART.</p>\n\n<hr class=\"divider\">\n<p><strong>WHEREAS</strong></p>\n<ol class=\"clauses\">\n<li>The Vendor is the absolute and lawful owner of the property described in the Schedule below, having acquired the same by way of <span class=\"filled\">{{modeOfAcquisitionEGPurchaseDeedInheritance}}</span> dated <span class=\"filled\">{{date}}</span>, registered as document no. <span class=\"filled\">{{registrationNumber}}</span>.</li>\n<li>The Vendor has represented that the said property is free from all encumbrances, charges, liens, litigation, acquisition proceedings or claims of any nature whatsoever.</li>\n<li>The Vendor has agreed to sell and the Vendee has agreed to purchase the said property for a total sale consideration of ₹<span class=\"filled\">{{amountInFigures}}</span> (Rupees <span class=\"filled\">{{amountInWords}}</span> only).</li>\n</ol>\n\n<p><strong>NOW THIS DEED WITNESSES AS FOLLOWS:</strong></p>\n<ol class=\"clauses\">\n<li>In consideration of the sum of ₹<span class=\"filled\">{{saleConsideration}}</span> paid by the Vendee to the Vendor (the receipt of which the Vendor hereby admits and acknowledges), the Vendor doth hereby sell, convey, transfer and assign unto the Vendee, the property more particularly described in the Schedule hereunder, together with all rights, easements and appurtenances thereto.</li>\n<li>The Vendor covenants that he/she has good and marketable title to the property, full power and absolute authority to sell the same, and that the property is free from all encumbrances.</li>\n<li>The Vendor shall, at the cost of the Vendee, execute all further documents and do all further acts as may reasonably be required to perfect the title of the Vendee.</li>\n<li>Possession of the property is delivered to the Vendee on the date of execution of this deed.</li>\n<li>All statutory dues, property tax and other outgoings up to the date of this deed shall be borne by the Vendor, and thereafter by the Vendee.</li>\n</ol>\n\n<p><strong>SCHEDULE OF PROPERTY</strong></p>\n<table class=\"field-table\">\n<tr><th>Description of Property</th><td><span class=\"filled\">{{eGFlatHousePlotNoBlockBuildingName}}</span></td></tr>\n<tr><th>Survey / Khasra / CTS No.</th><td><span class=\"filled\">{{number}}</span></td></tr>\n<tr><th>Area</th><td><span class=\"filled\">{{areaInSqFtSqM}}</span></td></tr>\n<tr><th>Village / Locality</th><td><span class=\"filled\">{{locality}}</span></td></tr>\n<tr><th>District & State</th><td><span class=\"filled\">{{districtState}}</span></td></tr>\n<tr><th>Boundaries</th><td><span class=\"filled\">{{northSouthEastWestBoundaries}}</span></td></tr>\n</table>\n\n<p>IN WITNESS WHEREOF the parties have set their hands on this deed on the day, month and year first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Vendor / Seller</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Vendee / Buyer</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">This deed must be executed on non-judicial stamp paper of the value prescribed by the State Stamp Act, and compulsorily registered at the Sub-Registrar's office within whose jurisdiction the property is situated, under Section 17 of the Registration Act, 1908.</div>\n",
    "price": 29
  },
  {
    "slug": "rent-lease-agreement",
    "title": "Rent / Lease Agreement",
    "act": "Transfer of Property Act, 1882 · State Rent Control / Model Tenancy Act",
    "shelf": "Property & Real Estate Law",
    "docType": "Agreement",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "fullNameOfLandlordLicensor",
        "label": "Full Name of Landlord/Licensor",
        "type": "text"
      },
      {
        "id": "landlordsAddress",
        "label": "Landlord's Address",
        "type": "text"
      },
      {
        "id": "fullNameOfTenantLicensee",
        "label": "Full Name of Tenant/Licensee",
        "type": "text"
      },
      {
        "id": "tenantsPermanentAddress",
        "label": "Tenant's Permanent Address",
        "type": "text"
      },
      {
        "id": "durationEG11Months",
        "label": "Duration, e.g. 11 months",
        "type": "text"
      },
      {
        "id": "startDate",
        "label": "Start Date",
        "type": "text"
      },
      {
        "id": "endDate",
        "label": "End Date",
        "type": "text"
      },
      {
        "id": "monthlyRentAmount",
        "label": "Monthly Rent Amount",
        "type": "text"
      },
      {
        "id": "dayOfMonth",
        "label": "Day of Month",
        "type": "text"
      },
      {
        "id": "depositAmount",
        "label": "Deposit Amount",
        "type": "text"
      },
      {
        "id": "residentialCommercial",
        "label": "residential / commercial",
        "type": "text"
      },
      {
        "id": "tenantLandlord",
        "label": "Tenant / Landlord",
        "type": "text"
      },
      {
        "id": "eGOneMonths",
        "label": "e.g. one month's",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "eG2bhkFlatShopOffice",
        "label": "e.g. 2BHK Flat / Shop / Office",
        "type": "text"
      },
      {
        "id": "areaInSqFt",
        "label": "Area in sq. ft.",
        "type": "text"
      },
      {
        "id": "furnishedSemiFurnishedUnfurnished",
        "label": "Furnished / Semi-furnished / Unfurnished",
        "type": "text"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Rent / Leave and License Agreement</h2>\n<p class=\"sub-center\">Between Landlord and Tenant</p>\n\n<p>THIS AGREEMENT is made on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>, BETWEEN:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfLandlordLicensor}}</span></strong>, residing at <span class=\"filled\">{{landlordsAddress}}</span>\n(hereinafter referred to as the \"LANDLORD/LICENSOR\") of the ONE PART;</p>\n\n<p><strong>AND</strong></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfTenantLicensee}}</span></strong>, residing at <span class=\"filled\">{{tenantsPermanentAddress}}</span>\n(hereinafter referred to as the \"TENANT/LICENSEE\") of the OTHER PART.</p>\n\n<hr class=\"divider\">\n<p><strong>WHEREAS</strong> the Landlord is the lawful owner/authorised occupant of the premises described in the Schedule below and has agreed to let out the same to the Tenant on a leave-and-license basis on the following terms.</p>\n\n<p><strong>NOW IT IS AGREED AS FOLLOWS:</strong></p>\n<ol class=\"clauses\">\n<li><strong>Term:</strong> This agreement shall be for a period of <span class=\"filled\">{{durationEG11Months}}</span> commencing from <span class=\"filled\">{{startDate}}</span> and ending on <span class=\"filled\">{{endDate}}</span>, renewable on mutual consent.</li>\n<li><strong>Rent:</strong> The Tenant shall pay a monthly rent of ₹<span class=\"filled\">{{monthlyRentAmount}}</span> payable in advance on or before the <span class=\"filled\">{{dayOfMonth}}</span> of each calendar month.</li>\n<li><strong>Security Deposit:</strong> The Tenant has paid a refundable interest-free security deposit of ₹<span class=\"filled\">{{depositAmount}}</span>, refundable at the end of the tenancy after deducting dues, if any.</li>\n<li><strong>Purpose of Use:</strong> The premises shall be used only for <span class=\"filled\">{{residentialCommercial}}</span> purposes and not for any illegal or unauthorised activity.</li>\n<li><strong>Maintenance:</strong> The Tenant shall maintain the premises in good condition and shall be responsible for minor repairs; major structural repairs shall be the responsibility of the Landlord.</li>\n<li><strong>Utilities:</strong> Electricity, water and maintenance charges shall be borne by the <span class=\"filled\">{{tenantLandlord}}</span> as billed.</li>\n<li><strong>Notice for Termination:</strong> Either party may terminate this agreement by giving <span class=\"filled\">{{eGOneMonths}}</span> prior written notice to the other.</li>\n<li>The Tenant shall not sub-let, assign or part with possession of the premises without the prior written consent of the Landlord.</li>\n</ol>\n\n<p><strong>SCHEDULE OF PREMISES</strong></p>\n<table class=\"field-table\">\n<tr><th>Address of Premises</th><td><span class=\"filled\">{{completeAddress}}</span></td></tr>\n<tr><th>Type</th><td><span class=\"filled\">{{eG2bhkFlatShopOffice}}</span></td></tr>\n<tr><th>Area</th><td><span class=\"filled\">{{areaInSqFt}}</span></td></tr>\n<tr><th>Furnishing Status</th><td><span class=\"filled\">{{furnishedSemiFurnishedUnfurnished}}</span></td></tr>\n</table>\n\n<p>IN WITNESS WHEREOF the parties have signed this agreement on the day and year first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Landlord</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Tenant</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">Stamp duty and registration requirements vary by state and by lease tenure — agreements exceeding 11 months (or as specified by state law) typically require compulsory registration under the Registration Act, 1908.</div>\n",
    "price": 99
  },
  {
    "slug": "gift-deed",
    "title": "Gift Deed",
    "act": "Transfer of Property Act, 1882, Section 122",
    "shelf": "Property & Real Estate Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "fullNameOfDonor",
        "label": "Full Name of Donor",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "donorsAddress",
        "label": "Donor's Address",
        "type": "text"
      },
      {
        "id": "fullNameOfDonee",
        "label": "Full Name of Donee",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName2",
        "label": "Father's/Husband's Name (2)",
        "type": "text"
      },
      {
        "id": "doneesAddress",
        "label": "Donee's Address",
        "type": "text"
      },
      {
        "id": "relationshipEGSonDaughterSpouse",
        "label": "Relationship, e.g. son / daughter / spouse",
        "type": "text"
      },
      {
        "id": "detailsOfThePropertyBeingGifted",
        "label": "Details of the property being gifted",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "area",
        "label": "Area",
        "type": "text"
      },
      {
        "id": "villageLocalityDistrictState",
        "label": "Village/Locality, District, State",
        "type": "text"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Deed of Gift</h2>\n<p class=\"sub-center\">Executed under Section 122, Transfer of Property Act, 1882</p>\n\n<p>THIS DEED OF GIFT is made on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>, BY:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfDonor}}</span></strong>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>, residing at <span class=\"filled\">{{donorsAddress}}</span>\n(hereinafter the \"DONOR\"), in favour of:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfDonee}}</span></strong>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName2}}</span>, residing at <span class=\"filled\">{{doneesAddress}}</span>,\nwho is the Donor's <span class=\"filled\">{{relationshipEGSonDaughterSpouse}}</span> (hereinafter the \"DONEE\").</p>\n\n<hr class=\"divider\">\n<p><strong>WHEREAS</strong> the Donor is the absolute owner of the property described in the Schedule below and, out of natural love and affection for the Donee, and without any monetary consideration, desires to gift the said property to the Donee.</p>\n\n<p><strong>NOW THIS DEED WITNESSES AS FOLLOWS:</strong></p>\n<ol class=\"clauses\">\n<li>That the Donor, out of natural love and affection and of his/her own free will, without any coercion, undue influence or monetary consideration, hereby gifts, transfers and conveys the property described in the Schedule to the Donee absolutely.</li>\n<li>That the Donee hereby accepts the gift, as evidenced by the Donee's signature on this deed, and takes possession of the property.</li>\n<li>That the Donor covenants that the property is free from all encumbrances, mortgages, charges and litigation as on the date of this deed.</li>\n<li>That the Donor shall not have any right, title, interest or claim over the said property from the date of execution of this deed.</li>\n<li>That this gift is irrevocable except on grounds recognised under Section 126 of the Transfer of Property Act, 1882.</li>\n</ol>\n\n<p><strong>SCHEDULE OF PROPERTY</strong></p>\n<table class=\"field-table\">\n<tr><th>Description of Property</th><td><span class=\"filled\">{{detailsOfThePropertyBeingGifted}}</span></td></tr>\n<tr><th>Survey / Khasra / CTS No.</th><td><span class=\"filled\">{{number}}</span></td></tr>\n<tr><th>Area</th><td><span class=\"filled\">{{area}}</span></td></tr>\n<tr><th>Location</th><td><span class=\"filled\">{{villageLocalityDistrictState}}</span></td></tr>\n</table>\n\n<p>IN WITNESS WHEREOF the Donor and Donee have signed this deed on the day and year first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Donor</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Donee (in acceptance)</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">A gift deed of immovable property must be registered under Section 17 of the Registration Act, 1908 to be valid. Many states offer concessional stamp duty for gifts between specified blood relatives — check your state's stamp act.</div>\n",
    "price": 39
  },
  {
    "slug": "power-of-attorney-property",
    "title": "General / Special Power of Attorney (Property)",
    "act": "Powers of Attorney Act, 1882",
    "shelf": "Property & Real Estate Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "fullNameOfPrincipalExecutant",
        "label": "Full Name of Principal/Executant",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "age",
        "label": "Age",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "idProofTypeNumber",
        "label": "ID proof type & number",
        "type": "text"
      },
      {
        "id": "fullNameOfAttorneyAgent",
        "label": "Full Name of Attorney/Agent",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName2",
        "label": "Father's/Husband's Name (2)",
        "type": "text"
      },
      {
        "id": "agentsAddress",
        "label": "Agent's Address",
        "type": "text"
      },
      {
        "id": "propertyAddress",
        "label": "Property Address",
        "type": "text"
      },
      {
        "id": "sellLeaseMortgageStrikeOutWhatIsNotApplicable",
        "label": "sell / lease / mortgage — strike out what is not applicable",
        "type": "textarea"
      },
      {
        "id": "propertyDetails",
        "label": "Property details",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "villageLocalityDistrictState",
        "label": "Village/Locality, District, State",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Power of Attorney</h2>\n<p class=\"sub-center\">Executed under the Powers of Attorney Act, 1882</p>\n\n<p>TO ALL TO WHOM THESE PRESENTS SHALL COME, I, <span class=\"filled\">{{fullNameOfPrincipalExecutant}}</span>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>,\naged about <span class=\"filled\">{{age}}</span> years, residing at <span class=\"filled\">{{completeAddress}}</span>, holding <span class=\"filled\">{{idProofTypeNumber}}</span>, do hereby appoint, nominate and constitute:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfAttorneyAgent}}</span></strong>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName2}}</span>, residing at <span class=\"filled\">{{agentsAddress}}</span>,</p>\n\n<p>as my true and lawful Attorney to do, execute and perform, in my name and on my behalf, the following acts, deeds and things in respect of the property described in the Schedule below:</p>\n\n<ol class=\"clauses\">\n<li>To manage, look after and supervise the property situated at <span class=\"filled\">{{propertyAddress}}</span>, including collection of rent, taxes and other dues.</li>\n<li>To represent me before any government authority, municipal corporation, revenue office or utility provider in respect of the said property.</li>\n<li>To <span class=\"filled\">{{sellLeaseMortgageStrikeOutWhatIsNotApplicable}}</span> the said property on such terms and for such consideration as the Attorney deems fit, and to sign, execute and register the necessary deed(s) on my behalf.</li>\n<li>To appear before the Sub-Registrar or any registering authority and to admit execution of any document relating to the said property.</li>\n<li>To receive on my behalf any sum of money, consideration or compensation payable in respect of the said property, and to give valid receipt and discharge for the same.</li>\n<li>To sign, verify and file any application, affidavit, plaint, written statement or other document required in connection with any legal proceedings relating to the said property.</li>\n</ol>\n\n<p>AND I hereby agree to ratify and confirm all acts, deeds and things lawfully done by my said Attorney by virtue of this Power of Attorney.</p>\n\n<p><strong>SCHEDULE OF PROPERTY</strong></p>\n<table class=\"field-table\">\n<tr><th>Description of Property</th><td><span class=\"filled\">{{propertyDetails}}</span></td></tr>\n<tr><th>Survey / Khasra / CTS No.</th><td><span class=\"filled\">{{number}}</span></td></tr>\n<tr><th>Location</th><td><span class=\"filled\">{{villageLocalityDistrictState}}</span></td></tr>\n</table>\n\n<p>IN WITNESS WHEREOF I have signed this Power of Attorney on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Principal / Executant</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Attorney (in acceptance)</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">A Power of Attorney used to transfer or deal with immovable property should be notarised, and registered if it authorises the sale/transfer of property (recommended after the Supreme Court's ruling in Suraj Lamp & Industries v. State of Haryana).</div>\n",
    "price": 149
  },
  {
    "slug": "mutation-application",
    "title": "Mutation Application (Dakhil-Kharij)",
    "act": "State Land Revenue Rules",
    "shelf": "Property & Real Estate Law",
    "docType": "Application",
    "fields": [
      {
        "id": "tehsilMunicipalWardDistrict",
        "label": "Tehsil / Municipal Ward, District",
        "type": "text"
      },
      {
        "id": "propertyAddress",
        "label": "Property Address",
        "type": "text"
      },
      {
        "id": "applicantsFullName",
        "label": "Applicant's Full Name",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "applicantsAddress",
        "label": "Applicant's Address",
        "type": "text"
      },
      {
        "id": "saleGiftInheritanceWill",
        "label": "Sale / Gift / Inheritance / Will",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "registrationNumber",
        "label": "Registration Number",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "name",
        "label": "Name",
        "type": "text"
      },
      {
        "id": "saleGiftInheritanceWill2",
        "label": "Sale / Gift / Inheritance / Will (2)",
        "type": "text"
      },
      {
        "id": "numberAndDate",
        "label": "Number and Date",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application for Mutation of Property Records</h2>\n<p class=\"sub-center\">(Dakhil-Kharij)</p>\n\n<p>To,<br>\nThe Tehsildar / Revenue Officer,<br>\n<span class=\"filled\">{{tehsilMunicipalWardDistrict}}</span></p>\n\n<p><strong>Subject: Application for mutation of revenue/property records in respect of property at <span class=\"filled\">{{propertyAddress}}</span></strong></p>\n\n<p>Sir/Madam,</p>\n\n<p>I, <span class=\"filled\">{{applicantsFullName}}</span>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>, residing at <span class=\"filled\">{{applicantsAddress}}</span>,\nrespectfully submit that I have acquired the property described below by way of <span class=\"filled\">{{saleGiftInheritanceWill}}</span>\nvide document dated <span class=\"filled\">{{date}}</span>, registered as document no. <span class=\"filled\">{{registrationNumber}}</span>.</p>\n\n<p>I therefore request that the revenue/property records be mutated in my name, and the previous owner's name be substituted with mine.</p>\n\n<p><strong>PROPERTY DETAILS</strong></p>\n<table class=\"field-table\">\n<tr><th>Property Address</th><td><span class=\"filled\">{{completeAddress}}</span></td></tr>\n<tr><th>Survey / Khasra / Property No.</th><td><span class=\"filled\">{{number}}</span></td></tr>\n<tr><th>Previous Owner's Name</th><td><span class=\"filled\">{{name}}</span></td></tr>\n<tr><th>Mode of Acquisition</th><td><span class=\"filled\">{{saleGiftInheritanceWill2}}</span></td></tr>\n<tr><th>Document / Deed No. & Date</th><td><span class=\"filled\">{{numberAndDate}}</span></td></tr>\n</table>\n\n<p><strong>Documents enclosed:</strong></p>\n<ol class=\"clauses\">\n<li>Certified copy of the registered sale/gift deed or succession certificate</li>\n<li>Latest property tax paid receipt</li>\n<li>Copy of applicant's identity and address proof</li>\n<li>Death certificate and legal heir certificate (if mutation is by inheritance)</li>\n</ol>\n\n<p>I request that the mutation be effected at the earliest and a copy of the mutated record be issued to me.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\">\n    <div class=\"sig-line\">Signature of Applicant<br>Date: <span class=\"filled\">{{date2}}</span><br>Place: <span class=\"filled\">{{place}}</span></div>\n  </div>\n</div>\n\n<div class=\"note-box\">Exact application format, fee and required annexures vary by state/municipal body. Many states (e.g. Maharashtra's e-mutation, Delhi's DORIS) now accept mutation applications online.</div>\n",
    "price": 39
  },
  {
    "slug": "marriage-registration-application",
    "title": "Application for Registration of Marriage",
    "act": "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
    "shelf": "Family Law",
    "docType": "Application",
    "fields": [
      {
        "id": "registrationDistrictSubDivision",
        "label": "Registration District / Sub-Division",
        "type": "text"
      },
      {
        "id": "dateOfMarriage",
        "label": "Date of Marriage",
        "type": "text"
      },
      {
        "id": "placeOfMarriage",
        "label": "Place of Marriage",
        "type": "text"
      },
      {
        "id": "hinduMarriageAct1955SpecialMarriageAct1954",
        "label": "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
        "type": "text"
      },
      {
        "id": "name",
        "label": "Name",
        "type": "text"
      },
      {
        "id": "dob",
        "label": "DOB",
        "type": "text"
      },
      {
        "id": "name2",
        "label": "Name (2)",
        "type": "text"
      },
      {
        "id": "address",
        "label": "Address",
        "type": "text"
      },
      {
        "id": "religion",
        "label": "Religion",
        "type": "text"
      },
      {
        "id": "unmarriedWidowerDivorcee",
        "label": "Unmarried / Widower / Divorcee",
        "type": "text"
      },
      {
        "id": "name3",
        "label": "Name (3)",
        "type": "text"
      },
      {
        "id": "dob2",
        "label": "DOB (2)",
        "type": "text"
      },
      {
        "id": "name4",
        "label": "Name (4)",
        "type": "text"
      },
      {
        "id": "address2",
        "label": "Address (2)",
        "type": "text"
      },
      {
        "id": "religion2",
        "label": "Religion (2)",
        "type": "text"
      },
      {
        "id": "unmarriedWidowDivorcee",
        "label": "Unmarried / Widow / Divorcee",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "venueCity",
        "label": "Venue, City",
        "type": "text"
      },
      {
        "id": "nameIfApplicable",
        "label": "Name, if applicable",
        "type": "text"
      },
      {
        "id": "witness1",
        "label": "Witness 1",
        "type": "text"
      },
      {
        "id": "witness2",
        "label": "Witness 2",
        "type": "text"
      },
      {
        "id": "witness3",
        "label": "Witness 3",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application for Registration of Marriage</h2>\n\n<p>To,<br>\nThe Marriage Registrar,<br>\n<span class=\"filled\">{{registrationDistrictSubDivision}}</span></p>\n\n<p>We, the undersigned, request registration of our marriage solemnised on <span class=\"filled\">{{dateOfMarriage}}</span> at <span class=\"filled\">{{placeOfMarriage}}</span>,\nunder the <span class=\"filled\">{{hinduMarriageAct1955SpecialMarriageAct1954}}</span>.</p>\n\n<p><strong>PARTICULARS OF HUSBAND</strong></p>\n<table class=\"field-table\">\n<tr><th>Full Name</th><td><span class=\"filled\">{{name}}</span></td></tr>\n<tr><th>Date of Birth / Age</th><td><span class=\"filled\">{{dob}}</span></td></tr>\n<tr><th>Father's/Mother's Name</th><td><span class=\"filled\">{{name2}}</span></td></tr>\n<tr><th>Permanent Address</th><td><span class=\"filled\">{{address}}</span></td></tr>\n<tr><th>Religion</th><td><span class=\"filled\">{{religion}}</span></td></tr>\n<tr><th>Marital Status Before Marriage</th><td><span class=\"filled\">{{unmarriedWidowerDivorcee}}</span></td></tr>\n</table>\n\n<p><strong>PARTICULARS OF WIFE</strong></p>\n<table class=\"field-table\">\n<tr><th>Full Name</th><td><span class=\"filled\">{{name3}}</span></td></tr>\n<tr><th>Date of Birth / Age</th><td><span class=\"filled\">{{dob2}}</span></td></tr>\n<tr><th>Father's/Mother's Name</th><td><span class=\"filled\">{{name4}}</span></td></tr>\n<tr><th>Permanent Address</th><td><span class=\"filled\">{{address2}}</span></td></tr>\n<tr><th>Religion</th><td><span class=\"filled\">{{religion2}}</span></td></tr>\n<tr><th>Marital Status Before Marriage</th><td><span class=\"filled\">{{unmarriedWidowDivorcee}}</span></td></tr>\n</table>\n\n<p><strong>PARTICULARS OF MARRIAGE</strong></p>\n<table class=\"field-table\">\n<tr><th>Date of Marriage</th><td><span class=\"filled\">{{date}}</span></td></tr>\n<tr><th>Place of Marriage</th><td><span class=\"filled\">{{venueCity}}</span></td></tr>\n<tr><th>Officiating Priest / Authority</th><td><span class=\"filled\">{{nameIfApplicable}}</span></td></tr>\n</table>\n\n<p><strong>Documents enclosed:</strong></p>\n<ol class=\"clauses\">\n<li>Age proof of both parties (birth certificate / 10th mark sheet / passport)</li>\n<li>Address proof of both parties</li>\n<li>Marriage invitation card / priest's certificate of marriage</li>\n<li>Passport-size photographs of both parties, and a joint photograph</li>\n<li>Affidavits of both parties regarding date of marriage, place, marital status</li>\n</ol>\n\n<p>We declare that the above particulars are true to the best of our knowledge and belief.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Husband</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Wife</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES (minimum three, as required):</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>3. Name: <span class=\"filled\">{{witness3}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">Most States now offer online marriage registration (e.g. Delhi's e-District, Maharashtra's Aaple Sarkar). Check your local Sub-Registrar/Marriage Officer's exact document checklist before applying.</div>\n",
    "price": 49
  },
  {
    "slug": "mutual-consent-divorce-petition",
    "title": "Petition for Mutual Consent Divorce",
    "act": "Hindu Marriage Act, 1955, Section 13B",
    "shelf": "Family Law",
    "docType": "Court Petition",
    "fields": [
      {
        "id": "city",
        "label": "City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "fullNameOfPetitionerNo1Husband",
        "label": "Full Name of Petitioner No. 1 / Husband",
        "type": "text"
      },
      {
        "id": "fullNameOfPetitionerNo2Wife",
        "label": "Full Name of Petitioner No. 2 / Wife",
        "type": "text"
      },
      {
        "id": "dateOfMarriage",
        "label": "Date of Marriage",
        "type": "text"
      },
      {
        "id": "placeOfMarriage",
        "label": "Place of Marriage",
        "type": "text"
      },
      {
        "id": "number",
        "label": "number",
        "type": "text"
      },
      {
        "id": "nameSAndAgeSOfChildrenOrStateNone",
        "label": "Name(s) and age(s) of children, or state 'None'",
        "type": "text"
      },
      {
        "id": "dateOfSeparation",
        "label": "Date of Separation",
        "type": "text"
      },
      {
        "id": "alimonyMaintenanceCustodyStridhanAsApplicable",
        "label": "alimony / maintenance / custody / stridhan, as applicable",
        "type": "textarea"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Family Court at <span class=\"filled\">{{city}}</span></h2>\n<p class=\"sub-center\">HMA Petition No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p style=\"text-align:center;\"><strong>IN THE MATTER OF:</strong></p>\n<p><strong><span class=\"filled\">{{fullNameOfPetitionerNo1Husband}}</span></strong> ... Petitioner No. 1<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{fullNameOfPetitionerNo2Wife}}</span></strong> ... Petitioner No. 2</p>\n\n<p style=\"text-align:center;\"><strong>PETITION FOR DIVORCE BY MUTUAL CONSENT UNDER SECTION 13B OF THE HINDU MARRIAGE ACT, 1955</strong></p>\n\n<p>The Petitioners above-named respectfully submit as follows:</p>\n\n<ol class=\"clauses\">\n<li>That the marriage between the Petitioners was solemnised on <span class=\"filled\">{{dateOfMarriage}}</span> at <span class=\"filled\">{{placeOfMarriage}}</span> according to Hindu rites and ceremonies.</li>\n<li>That out of the said wedlock, <span class=\"filled\">{{number}}</span> child(ren) were born, namely <span class=\"filled\">{{nameSAndAgeSOfChildrenOrStateNone}}</span>.</li>\n<li>That the Petitioners have been living separately since <span class=\"filled\">{{dateOfSeparation}}</span> and have not been able to live together as husband and wife.</li>\n<li>That the Petitioners have mutually agreed that the marriage between them be dissolved by a decree of divorce, as they have not been able to cohabit and there is no possibility of reconciliation.</li>\n<li>That the Petitioners have mutually settled all issues relating to <span class=\"filled\">{{alimonyMaintenanceCustodyStridhanAsApplicable}}</span>, the terms of which are annexed as Annexure A.</li>\n<li>That this petition is presented with the free consent of both Petitioners, without any force, fraud or undue influence.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore prayed that this Hon'ble Court may be pleased to:</p>\n<ol class=\"clauses\">\n<li>Pass a decree of divorce dissolving the marriage solemnised between the Petitioners;</li>\n<li>Pass such further order(s) as this Hon'ble Court may deem fit in the interest of justice.</li>\n</ol>\n\n<p><strong>VERIFICATION</strong></p>\n<p>We, the Petitioners above-named, do hereby verify that the contents of the above petition are true to our knowledge and belief.</p>\n\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Petitioner No. 1</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Petitioner No. 2</div></div>\n</div>\n\n<div class=\"note-box\">Section 13B requires a statutory 'cooling-off' period (generally 6 months from filing the first motion, which courts may waive in appropriate cases per Amardeep Singh v. Harveen Kaur) before the second motion and final decree.</div>\n",
    "price": 149
  },
  {
    "slug": "maintenance-application",
    "title": "Application for Maintenance",
    "act": "Section 144, Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly S.125 CrPC)",
    "shelf": "Family Law",
    "docType": "Court Application",
    "fields": [
      {
        "id": "judicialMagistrateFamilyCourtCity",
        "label": "Judicial Magistrate / Family Court, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "fullNameOfApplicant",
        "label": "Full Name of Applicant",
        "type": "text"
      },
      {
        "id": "fullNameOfRespondent",
        "label": "Full Name of Respondent",
        "type": "text"
      },
      {
        "id": "wifeChildParent",
        "label": "wife / child / parent",
        "type": "text"
      },
      {
        "id": "marriageCertificateBirthCertificateAsApplicable",
        "label": "marriage certificate / birth certificate, as applicable",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "respondentsApproximateMonthlyIncome",
        "label": "Respondent's approximate monthly income",
        "type": "text"
      },
      {
        "id": "occupation",
        "label": "occupation",
        "type": "text"
      },
      {
        "id": "rentFoodMedicalEducationEtc",
        "label": "rent, food, medical, education, etc.",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "Amount",
        "type": "text"
      },
      {
        "id": "amountClaimed",
        "label": "Amount Claimed",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{judicialMagistrateFamilyCourtCity}}</span></h2>\n<p class=\"sub-center\">Maintenance Application No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfApplicant}}</span></strong> ... Applicant<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{fullNameOfRespondent}}</span></strong> ... Respondent</p>\n\n<p style=\"text-align:center;\"><strong>APPLICATION FOR MAINTENANCE UNDER SECTION 144, BNSS, 2023</strong></p>\n\n<p>Most Respectfully Showeth:</p>\n\n<ol class=\"clauses\">\n<li>That the Applicant is the <span class=\"filled\">{{wifeChildParent}}</span> of the Respondent, their relationship having been established by <span class=\"filled\">{{marriageCertificateBirthCertificateAsApplicable}}</span> dated <span class=\"filled\">{{date}}</span>.</li>\n<li>That the Respondent is possessed of sufficient means and is capable of maintaining the Applicant, but has neglected and refused to do so.</li>\n<li>That the Applicant is unable to maintain herself/himself and has no independent source of income sufficient for a reasonable standard of living, whereas the Respondent earns approximately ₹<span class=\"filled\">{{respondentsApproximateMonthlyIncome}}</span> per month from <span class=\"filled\">{{occupation}}</span>.</li>\n<li>That the Applicant's reasonable monthly expenses, including <span class=\"filled\">{{rentFoodMedicalEducationEtc}}</span>, amount to approximately ₹<span class=\"filled\">{{amount}}</span> per month.</li>\n<li>That the Applicant has no other adequate remedy save by way of the present application.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore most respectfully prayed that this Hon'ble Court may be pleased to direct the Respondent to pay maintenance of ₹<span class=\"filled\">{{amountClaimed}}</span> per month to the Applicant from the date of this application, and to pass such further orders as deemed fit in the interest of justice.</p>\n\n<p><strong>VERIFICATION</strong></p>\n<p>I, the Applicant above-named, do hereby verify that the contents of the above application are true to my knowledge, save paragraphs based on legal advice which I believe to be true.</p>\n\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Applicant</div></div>\n</div>\n\n<div class=\"note-box\">Applications under Section 144, BNSS (successor to Section 125, CrPC) may be filed before a Judicial Magistrate of the First Class in the district where the Respondent resides, where the Applicant resides, or where they last resided together.</div>\n",
    "price": 149
  },
  {
    "slug": "will-testament",
    "title": "Will / Testament",
    "act": "Indian Succession Act, 1925",
    "shelf": "Family Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "fullNameOfTestator",
        "label": "Full Name of Testator",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "age",
        "label": "Age",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "fullNameOfExecutor",
        "label": "Full Name of Executor",
        "type": "text"
      },
      {
        "id": "executorsAddress",
        "label": "Executor's Address",
        "type": "text"
      },
      {
        "id": "listEachAssetAndTheBeneficiaryWhoIsToReceiveItEGImmovablePropertyBankAccountsInvestmentsJewelleryPersonalEffects",
        "label": "List each asset and the beneficiary who is to receive it — e.g. immovable property, bank accounts, investments, jewellery, personal effects",
        "type": "textarea"
      },
      {
        "id": "alternateBeneficiaryOrAsPerResiduaryClause",
        "label": "alternate beneficiary or as per residuary clause",
        "type": "textarea"
      },
      {
        "id": "residuaryBeneficiaryIes",
        "label": "residuary beneficiary(ies)",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "witness1NameAddress",
        "label": "Witness 1 Name & Address",
        "type": "text"
      },
      {
        "id": "witness2NameAddress",
        "label": "Witness 2 Name & Address",
        "type": "text"
      }
    ],
    "template": "\n<h2>Last Will and Testament</h2>\n<p class=\"sub-center\">Executed under the Indian Succession Act, 1925</p>\n\n<p>I, <span class=\"filled\">{{fullNameOfTestator}}</span>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>, aged about <span class=\"filled\">{{age}}</span> years,\nresiding at <span class=\"filled\">{{completeAddress}}</span>, being of sound mind and disposing memory, and not acting under any coercion, fraud or undue influence,\ndo hereby revoke all my former Wills, Codicils and testamentary dispositions made by me, and declare this to be my Last Will and Testament.</p>\n\n<ol class=\"clauses\">\n<li>I appoint <span class=\"filled\">{{fullNameOfExecutor}}</span>, residing at <span class=\"filled\">{{executorsAddress}}</span>, as the Executor of this my Will.</li>\n<li>I direct that all my just debts, funeral and testamentary expenses be paid out of my estate.</li>\n<li>I bequeath the following assets to the following beneficiaries: <span class=\"filled\">{{listEachAssetAndTheBeneficiaryWhoIsToReceiveItEGImmovablePropertyBankAccountsInvestmentsJewelleryPersonalEffects}}</span>.</li>\n<li>In the event that any beneficiary named above predeceases me, the share bequeathed to such beneficiary shall devolve upon <span class=\"filled\">{{alternateBeneficiaryOrAsPerResiduaryClause}}</span>.</li>\n<li>Any residue of my estate not specifically bequeathed above shall devolve upon <span class=\"filled\">{{residuaryBeneficiaryIes}}</span>.</li>\n<li>This Will is made by me voluntarily and reflects my true intentions regarding the distribution of my estate after my demise.</li>\n</ol>\n\n<p>IN WITNESS WHEREOF I have set my hand to this Will on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>, in the presence of the witnesses named below, who have signed in my presence and in the presence of each other.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Testator</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1NameAddress}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2NameAddress}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">A Will requires attestation by at least two witnesses under Section 63 of the Indian Succession Act, 1925. Registration is optional but strongly recommended, as it adds a strong presumption of genuineness and prevents loss or tampering.</div>\n",
    "price": 149
  },
  {
    "slug": "adoption-deed",
    "title": "Adoption Deed",
    "act": "Hindu Adoption and Maintenance Act, 1956 / Juvenile Justice Act, 2015",
    "shelf": "Family Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "fullNameOfBiologicalParentSGuardian",
        "label": "Full Name of Biological Parent(s) / Guardian",
        "type": "text"
      },
      {
        "id": "address",
        "label": "Address",
        "type": "text"
      },
      {
        "id": "fullNameOfAdoptiveParentS",
        "label": "Full Name of Adoptive Parent(s)",
        "type": "text"
      },
      {
        "id": "address2",
        "label": "Address (2)",
        "type": "text"
      },
      {
        "id": "childsName",
        "label": "Child's Name",
        "type": "text"
      },
      {
        "id": "childsDob",
        "label": "Child's DOB",
        "type": "text"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Deed of Adoption</h2>\n\n<p>THIS DEED OF ADOPTION is executed on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>, BETWEEN:</p>\n\n<p><strong><span class=\"filled\">{{fullNameOfBiologicalParentSGuardian}}</span></strong>, residing at <span class=\"filled\">{{address}}</span> (hereinafter the \"GIVER(S)\");</p>\n\n<p><strong>AND</strong></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfAdoptiveParentS}}</span></strong>, residing at <span class=\"filled\">{{address2}}</span> (hereinafter the \"ADOPTER(S)\"),</p>\n\n<p>in respect of the child named <span class=\"filled\">{{childsName}}</span>, date of birth <span class=\"filled\">{{childsDob}}</span>.</p>\n\n<hr class=\"divider\">\n<p><strong>WHEREAS</strong> the Giver(s), being the lawful parent(s)/guardian of the said child, have given the child in adoption to the Adopter(s) out of natural love and affection and for the child's welfare, and the Adopter(s) have taken the child in adoption.</p>\n\n<ol class=\"clauses\">\n<li>The Giver(s) hereby give and the Adopter(s) hereby take the said child in adoption, with the child henceforth to be treated in all respects as the natural-born child of the Adopter(s).</li>\n<li>All ties between the child and the Giver(s)' family are severed and replaced by ties with the Adopter(s)' family, in accordance with applicable adoption law, from the date of this deed.</li>\n<li>The Adopter(s) undertake to bring up, maintain and educate the child as their own, and to ensure all rights of inheritance and succession available to a natural-born child.</li>\n<li>This adoption has taken place with the free consent of all concerned parties, without any consideration or exchange in the nature of a sale.</li>\n</ol>\n\n<p>IN WITNESS WHEREOF the parties have signed this deed on the day and year first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Giver(s)</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Adopter(s)</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">Adoptions in India are governed either by the Hindu Adoption and Maintenance Act, 1956 (for Hindus) or the Juvenile Justice (Care and Protection of Children) Act, 2015 read with CARA regulations (for adoptions involving children in the child welfare system, or across religions). A private adoption deed alone is not sufficient for adoptions falling under the JJ Act — CARA's formal process, including a court order, must be followed.</div>\n",
    "price": 149
  },
  {
    "slug": "fir-format",
    "title": "First Information Report (FIR) Format",
    "act": "Section 173, Bharatiya Nagarik Suraksha Sanhita, 2023",
    "shelf": "Criminal Law",
    "docType": "Statutory Format",
    "fields": [
      {
        "id": "nameOfPoliceStationDistrict",
        "label": "Name of Police Station, District",
        "type": "text"
      },
      {
        "id": "dateAndTime",
        "label": "Date and Time",
        "type": "text"
      },
      {
        "id": "dateAndTime2",
        "label": "Date and Time (2)",
        "type": "text"
      },
      {
        "id": "fullDetails",
        "label": "Full details",
        "type": "text"
      },
      {
        "id": "detailsOrUnknown",
        "label": "Details or 'Unknown'",
        "type": "text"
      },
      {
        "id": "details",
        "label": "Details",
        "type": "text"
      },
      {
        "id": "narrativeOfTheIncident",
        "label": "Narrative of the incident",
        "type": "textarea"
      },
      {
        "id": "details2",
        "label": "Details (2)",
        "type": "text"
      },
      {
        "id": "details3",
        "label": "Details (3)",
        "type": "text"
      }
    ],
    "template": "\n<h2>First Information Report</h2>\n<p class=\"sub-center\">Under Section 173, Bharatiya Nagarik Suraksha Sanhita, 2023</p>\n\n<div class=\"note-box\">An FIR is registered by the police themselves in the prescribed government format (Form under the BNSS/State Police Manual) once you report a cognisable offence — you do not draft or file this yourself. What follows is a reference layout of what your oral or written complaint should cover, so the police record it accurately.</div>\n\n<table class=\"field-table\">\n<tr><th>Police Station & District</th><td><span class=\"filled\">{{nameOfPoliceStationDistrict}}</span></td></tr>\n<tr><th>Date & Time of Occurrence</th><td><span class=\"filled\">{{dateAndTime}}</span></td></tr>\n<tr><th>Date & Time of Report</th><td><span class=\"filled\">{{dateAndTime2}}</span></td></tr>\n<tr><th>Complainant's Name, Address & Contact</th><td><span class=\"filled\">{{fullDetails}}</span></td></tr>\n<tr><th>Name/Description of Accused (if known)</th><td><span class=\"filled\">{{detailsOrUnknown}}</span></td></tr>\n</table>\n\n<p><strong>Brief facts of the information (to be stated in your own words, in first person, in chronological order):</strong></p>\n<ol class=\"clauses\">\n<li>Date, time and exact place of the incident: <span class=\"filled\">{{details}}</span></li>\n<li>What happened, described step by step: <span class=\"filled\">{{narrativeOfTheIncident}}</span></li>\n<li>Names/description of persons involved, including any witnesses present: <span class=\"filled\">{{details2}}</span></li>\n<li>Property lost, damaged or stolen, if any, with approximate value: <span class=\"filled\">{{details3}}</span></li>\n<li>Any other relevant facts, including prior incidents connected to this complaint, if applicable.</li>\n</ol>\n\n<p><strong>Declaration:</strong> I state that the above information is true to the best of my knowledge and belief.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Informant / Complainant</div></div>\n</div>\n\n<div class=\"note-box\">Under Section 173(4) BNSS, if the police refuse to register an FIR for a cognisable offence, you may send the complaint in writing by post to the Superintendent of Police, or approach the jurisdictional Magistrate under Section 175(3) BNSS (formerly Section 156(3) CrPC).</div>\n",
    "price": 39
  },
  {
    "slug": "regular-bail-application",
    "title": "Regular Bail Application",
    "act": "Sections 478–483, Bharatiya Nagarik Suraksha Sanhita, 2023",
    "shelf": "Criminal Law",
    "docType": "Court Application",
    "fields": [
      {
        "id": "sessionsJudgeMagistrateCity",
        "label": "Sessions Judge / Magistrate, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "state",
        "label": "State",
        "type": "text"
      },
      {
        "id": "fullNameOfAccused",
        "label": "Full Name of Accused",
        "type": "text"
      },
      {
        "id": "firNumber",
        "label": "FIR Number",
        "type": "text"
      },
      {
        "id": "policeStation",
        "label": "Police Station",
        "type": "text"
      },
      {
        "id": "sectionsOfLawInvoked",
        "label": "Sections of law invoked",
        "type": "text"
      },
      {
        "id": "dateOfArrest",
        "label": "Date of Arrest",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{sessionsJudgeMagistrateCity}}</span></h2>\n<p class=\"sub-center\">Bail Application No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong>State of <span class=\"filled\">{{state}}</span></strong> ... Prosecution<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{fullNameOfAccused}}</span></strong> ... Applicant/Accused</p>\n\n<p style=\"text-align:center;\"><strong>APPLICATION FOR REGULAR BAIL UNDER SECTIONS 478–483, BNSS, 2023</strong></p>\n\n<p>Most Respectfully Showeth:</p>\n\n<ol class=\"clauses\">\n<li>That the Applicant has been arrested and is in judicial/police custody in connection with FIR No. <span class=\"filled\">{{firNumber}}</span>, registered at <span class=\"filled\">{{policeStation}}</span>, under Sections <span class=\"filled\">{{sectionsOfLawInvoked}}</span>.</li>\n<li>That the Applicant was arrested on <span class=\"filled\">{{dateOfArrest}}</span> and has been in custody since then.</li>\n<li>That the Applicant is innocent of the alleged offence and has been falsely implicated; the allegations are yet to be proved at trial.</li>\n<li>That the investigation qua the Applicant is complete/substantially complete, and the Applicant's continued custody is not necessary for further investigation.</li>\n<li>That the Applicant is a permanent resident of the given address, has deep roots in society, and is not a flight risk.</li>\n<li>That the Applicant undertakes to abide by any conditions this Hon'ble Court may impose, including surrender of passport, regular attendance before the Investigating Officer, and not tampering with evidence or influencing witnesses.</li>\n<li>That the Applicant has no other efficacious remedy except to approach this Hon'ble Court.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore most respectfully prayed that this Hon'ble Court may be pleased to enlarge the Applicant on regular bail in connection with the above FIR, on such terms and conditions as this Hon'ble Court deems fit.</p>\n\n<p><strong>VERIFICATION</strong></p>\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> that the contents of the above application are true and correct to the best of my knowledge.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Applicant / Counsel</div></div>\n</div>\n",
    "price": 49
  },
  {
    "slug": "anticipatory-bail",
    "title": "Anticipatory Bail Application",
    "act": "Section 482, Bharatiya Nagarik Suraksha Sanhita, 2023",
    "shelf": "Criminal Law",
    "docType": "Court Application",
    "fields": [
      {
        "id": "sessionsJudgeHighCourtCity",
        "label": "Sessions Judge / High Court, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "fullNameOfApplicant",
        "label": "Full Name of Applicant",
        "type": "text"
      },
      {
        "id": "state",
        "label": "State",
        "type": "text"
      },
      {
        "id": "firNumberIfRegistered",
        "label": "FIR Number, if registered",
        "type": "text"
      },
      {
        "id": "policeStation",
        "label": "Police Station",
        "type": "text"
      },
      {
        "id": "sectionsOfLawInvoked",
        "label": "Sections of law invoked",
        "type": "text"
      },
      {
        "id": "briefReasonForApprehension",
        "label": "brief reason for apprehension",
        "type": "text"
      },
      {
        "id": "orDiscloseAntecedentsIfAny",
        "label": "or disclose antecedents, if any",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{sessionsJudgeHighCourtCity}}</span></h2>\n<p class=\"sub-center\">Anticipatory Bail Application No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfApplicant}}</span></strong> ... Applicant<br>\n<strong>VERSUS</strong><br>\n<strong>State of <span class=\"filled\">{{state}}</span></strong> ... Respondent</p>\n\n<p style=\"text-align:center;\"><strong>APPLICATION FOR ANTICIPATORY BAIL UNDER SECTION 482, BNSS, 2023</strong></p>\n\n<p>Most Respectfully Showeth:</p>\n\n<ol class=\"clauses\">\n<li>That the Applicant apprehends arrest in connection with FIR No. <span class=\"filled\">{{firNumberIfRegistered}}</span>, registered at <span class=\"filled\">{{policeStation}}</span>, under Sections <span class=\"filled\">{{sectionsOfLawInvoked}}</span>, on the basis of <span class=\"filled\">{{briefReasonForApprehension}}</span>.</li>\n<li>That the Applicant has been falsely implicated in the above matter and is innocent of the allegations made against him/her.</li>\n<li>That the Applicant has no criminal antecedents <span class=\"filled\">{{orDiscloseAntecedentsIfAny}}</span>, and is a permanent resident of the address given below, with deep roots in society.</li>\n<li>That the Applicant is willing to fully cooperate with the investigation and join the same as and when required by the Investigating Officer.</li>\n<li>That there is no likelihood of the Applicant absconding, tampering with evidence, or influencing witnesses if released on anticipatory bail.</li>\n<li>That the arrest of the Applicant at this stage would cause irreparable harm to his/her reputation and would not serve any purpose of investigation, since all relevant documents/evidence are already in the custody of the investigating agency or otherwise accessible.</li>\n<li>That the Applicant undertakes to abide by any conditions this Hon'ble Court may deem fit to impose under Section 482(2), BNSS, including appearing before the police as and when required and not leaving the country without permission.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore most respectfully prayed that this Hon'ble Court may be pleased to direct that in the event of arrest, the Applicant be released on bail, on such terms and conditions as this Hon'ble Court deems fit.</p>\n\n<p><strong>VERIFICATION</strong></p>\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> that the contents of the above application are true and correct to the best of my knowledge and belief.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Applicant / Counsel</div></div>\n</div>\n\n<div class=\"note-box\">Section 482, BNSS 2023 (successor to Section 438, CrPC) governs anticipatory bail. Some states impose local amendments/riders on this provision — check the applicable state amendment before filing.</div>\n",
    "price": 129
  },
  {
    "slug": "private-criminal-complaint",
    "title": "Private Criminal Complaint",
    "act": "Section 223, Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly S.200 CrPC)",
    "shelf": "Criminal Law",
    "docType": "Court Complaint",
    "fields": [
      {
        "id": "judicialMagistrateCity",
        "label": "Judicial Magistrate, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "fullNameOfComplainant",
        "label": "Full Name of Complainant",
        "type": "text"
      },
      {
        "id": "fullNameOfAccused",
        "label": "Full Name of Accused",
        "type": "text"
      },
      {
        "id": "briefDescriptionOfComplainantsStatusRelationshipToMatter",
        "label": "brief description of complainant's status/relationship to matter",
        "type": "textarea"
      },
      {
        "id": "natureOfOffenceAndRelevantSectionsEGCheatingUS318Bns",
        "label": "nature of offence and relevant sections, e.g. cheating u/s 318 BNS",
        "type": "textarea"
      },
      {
        "id": "detailedNarrativeOfFactsConstitutingTheOffenceInChronologicalOrder",
        "label": "Detailed narrative of facts constituting the offence, in chronological order",
        "type": "textarea"
      },
      {
        "id": "policeStation",
        "label": "Police Station",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "listOfWitnessesAndDocuments",
        "label": "List of witnesses and documents",
        "type": "textarea"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{judicialMagistrateCity}}</span></h2>\n<p class=\"sub-center\">Criminal Complaint No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfComplainant}}</span></strong> ... Complainant<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{fullNameOfAccused}}</span></strong> ... Accused</p>\n\n<p style=\"text-align:center;\"><strong>COMPLAINT UNDER SECTION 223, BNSS, 2023</strong></p>\n\n<p>Most Respectfully Showeth:</p>\n\n<ol class=\"clauses\">\n<li>That the Complainant is <span class=\"filled\">{{briefDescriptionOfComplainantsStatusRelationshipToMatter}}</span>.</li>\n<li>That the Accused has committed the offence(s) of <span class=\"filled\">{{natureOfOffenceAndRelevantSectionsEGCheatingUS318Bns}}</span> in the following manner: <span class=\"filled\">{{detailedNarrativeOfFactsConstitutingTheOffenceInChronologicalOrder}}</span>.</li>\n<li>That the Complainant approached the police at <span class=\"filled\">{{policeStation}}</span> on <span class=\"filled\">{{date}}</span>, but the police have failed/refused to register an FIR / take action in the matter.</li>\n<li>That the Complainant has the following witnesses and documents in support of the allegations: <span class=\"filled\">{{listOfWitnessesAndDocuments}}</span>.</li>\n<li>That the present complaint is filed within limitation and this Hon'ble Court has jurisdiction to try the matter.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore prayed that this Hon'ble Court may be pleased to take cognizance of the offence(s), examine the Complainant and witnesses under Section 223(1)/224, BNSS, and proceed against the Accused in accordance with law.</p>\n\n<p><strong>VERIFICATION</strong></p>\n<p>I, the Complainant, verify that the contents of the above complaint are true to my knowledge and belief.</p>\n\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Complainant</div></div>\n</div>\n",
    "price": 129
  },
  {
    "slug": "vakalatnama",
    "title": "Vakalatnama",
    "act": "Advocates Act, 1961",
    "shelf": "Criminal Law",
    "docType": "Court Authorisation",
    "fields": [
      {
        "id": "courtNameCity",
        "label": "Court Name, City",
        "type": "text"
      },
      {
        "id": "caseFirNumber",
        "label": "Case / FIR Number",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "partyName",
        "label": "Party Name",
        "type": "text"
      },
      {
        "id": "complainantPetitionerAccusedRespondent",
        "label": "Complainant / Petitioner / Accused / Respondent",
        "type": "text"
      },
      {
        "id": "oppositePartyName",
        "label": "Opposite Party Name",
        "type": "text"
      },
      {
        "id": "oppositePartysStatus",
        "label": "Opposite Party's Status",
        "type": "text"
      },
      {
        "id": "clientsFullName",
        "label": "Client's Full Name",
        "type": "text"
      },
      {
        "id": "complainantPetitionerAccusedRespondent2",
        "label": "Complainant / Petitioner / Accused / Respondent (2)",
        "type": "text"
      },
      {
        "id": "advocatesFullName",
        "label": "Advocate's Full Name",
        "type": "text"
      },
      {
        "id": "barCouncilEnrolmentNumber",
        "label": "Bar Council Enrolment Number",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      }
    ],
    "template": "\n<h2>Vakalatnama</h2>\n\n<p>IN THE COURT OF <span class=\"filled\">{{courtNameCity}}</span></p>\n<p>Case No. <span class=\"filled\">{{caseFirNumber}}</span> of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{partyName}}</span></strong> ... <span class=\"filled\">{{complainantPetitionerAccusedRespondent}}</span><br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{oppositePartyName}}</span></strong> ... <span class=\"filled\">{{oppositePartysStatus}}</span></p>\n\n<hr class=\"divider\">\n\n<p>I, <span class=\"filled\">{{clientsFullName}}</span>, the <span class=\"filled\">{{complainantPetitionerAccusedRespondent2}}</span> in the above matter, do hereby appoint and authorise\n<span class=\"filled\">{{advocatesFullName}}</span>, Advocate, Enrolment No. <span class=\"filled\">{{barCouncilEnrolmentNumber}}</span>, to appear, act and plead on my behalf in the above-noted case,\nand to conduct and prosecute (or defend, as the case may be) the same and all proceedings that may arise thereout, including any appeal, revision or review.</p>\n\n<p>The said Advocate is authorised, on my behalf, to:</p>\n<ol class=\"clauses\">\n<li>Sign, file, verify and present pleadings, applications, affidavits and other documents;</li>\n<li>Withdraw, compromise, refer to arbitration, or take any other step in the proceedings as deemed necessary;</li>\n<li>Receive on my behalf all sums payable to me under any order or decree passed in this case;</li>\n<li>Engage or associate other counsel to assist in the conduct of the case, at his/her discretion.</li>\n</ol>\n\n<p>I agree to ratify all acts done by the said Advocate in pursuance of this authority.</p>\n\n<p>Dated this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Client</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Accepted — Signature of Advocate</div></div>\n</div>\n\n<div class=\"note-box\">The Vakalatnama should carry the applicable court-fee stamp as prescribed by the relevant State Court Fees Act, and is typically filed at the first appearance before the court.</div>\n",
    "price": 39
  },
  {
    "slug": "plaint-civil-suit",
    "title": "Plaint (Civil Suit)",
    "act": "Order VII, Code of Civil Procedure, 1908",
    "shelf": "Civil & Contract Law",
    "docType": "Court Pleading",
    "fields": [
      {
        "id": "civilJudgeCity",
        "label": "Civil Judge, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "fullNameAddressOfPlaintiff",
        "label": "Full Name & Address of Plaintiff",
        "type": "text"
      },
      {
        "id": "fullNameAddressOfDefendant",
        "label": "Full Name & Address of Defendant",
        "type": "text"
      },
      {
        "id": "natureOfReliefEGRecoveryOfMoneySpecificPerformanceInjunction",
        "label": "Nature of Relief, e.g. Recovery of Money / Specific Performance / Injunction",
        "type": "textarea"
      },
      {
        "id": "suitValuation",
        "label": "Suit Valuation",
        "type": "text"
      },
      {
        "id": "courtFeeAmount",
        "label": "Court Fee Amount",
        "type": "text"
      },
      {
        "id": "relationshipTransactionBetweenTheParties",
        "label": "relationship/transaction between the parties",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "briefDescriptionOfTheTriggeringEvent",
        "label": "brief description of the triggering event",
        "type": "textarea"
      },
      {
        "id": "detailedNumberedNarrativeOfFacts",
        "label": "Detailed, numbered narrative of facts",
        "type": "textarea"
      },
      {
        "id": "dateOfLegalNoticeIfAny",
        "label": "Date of legal notice, if any",
        "type": "text"
      },
      {
        "id": "performObligationPayTheAmountEtc",
        "label": "perform obligation / pay the amount / etc.",
        "type": "text"
      },
      {
        "id": "specificReliefSoughtEGRecoveryOfRsWithInterest",
        "label": "specific relief sought, e.g. recovery of Rs. ___ with interest",
        "type": "textarea"
      },
      {
        "id": "lastParagraphNumber",
        "label": "last paragraph number",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{civilJudgeCity}}</span></h2>\n<p class=\"sub-center\">Civil Suit No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{fullNameAddressOfPlaintiff}}</span></strong> ... Plaintiff<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{fullNameAddressOfDefendant}}</span></strong> ... Defendant</p>\n\n<p style=\"text-align:center;\"><strong>PLAINT UNDER ORDER VII, CODE OF CIVIL PROCEDURE, 1908</strong></p>\n<p class=\"sub-center\">Suit for <span class=\"filled\">{{natureOfReliefEGRecoveryOfMoneySpecificPerformanceInjunction}}</span></p>\n<p class=\"sub-center\">Valuation for court fee and jurisdiction: ₹<span class=\"filled\">{{suitValuation}}</span>; Court fee paid: ₹<span class=\"filled\">{{courtFeeAmount}}</span></p>\n\n<p>The Plaintiff above-named respectfully states as follows:</p>\n\n<ol class=\"clauses\">\n<li>That the Plaintiff and Defendant are known to each other by virtue of <span class=\"filled\">{{relationshipTransactionBetweenTheParties}}</span>.</li>\n<li>That the cause of action arose on <span class=\"filled\">{{date}}</span> when <span class=\"filled\">{{briefDescriptionOfTheTriggeringEvent}}</span>.</li>\n<li>That the facts giving rise to this suit are as follows: <span class=\"filled\">{{detailedNumberedNarrativeOfFacts}}</span>.</li>\n<li>That despite repeated requests/a legal notice dated <span class=\"filled\">{{dateOfLegalNoticeIfAny}}</span>, the Defendant has failed to <span class=\"filled\">{{performObligationPayTheAmountEtc}}</span>.</li>\n<li>That this Hon'ble Court has territorial and pecuniary jurisdiction to entertain this suit as the cause of action arose, and/or the Defendant resides/carries on business, within its jurisdiction.</li>\n<li>That this suit is filed within the period of limitation prescribed under the Limitation Act, 1963.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore most respectfully prayed that this Hon'ble Court may be pleased to:</p>\n<ol class=\"clauses\">\n<li>Pass a decree in favour of the Plaintiff and against the Defendant for <span class=\"filled\">{{specificReliefSoughtEGRecoveryOfRsWithInterest}}</span>;</li>\n<li>Award costs of the suit to the Plaintiff;</li>\n<li>Pass such further or other order(s) as this Hon'ble Court deems fit in the interest of justice.</li>\n</ol>\n\n<p><strong>VERIFICATION</strong></p>\n<p>I, the Plaintiff above-named, verify that the contents of paragraphs 1 to <span class=\"filled\">{{lastParagraphNumber}}</span> are true to my personal knowledge and belief, and that nothing material has been concealed.</p>\n\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Plaintiff / Counsel</div></div>\n</div>\n",
    "price": 229
  },
  {
    "slug": "written-statement",
    "title": "Written Statement",
    "act": "Order VIII, Code of Civil Procedure, 1908",
    "shelf": "Civil & Contract Law",
    "docType": "Court Pleading",
    "fields": [
      {
        "id": "civilJudgeCity",
        "label": "Civil Judge, City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "plaintiffsName",
        "label": "Plaintiff's Name",
        "type": "text"
      },
      {
        "id": "defendantsName",
        "label": "Defendant's Name",
        "type": "text"
      },
      {
        "id": "stateLegalObjectionEGLackOfCauseOfActionLimitationJurisdiction",
        "label": "state legal objection, e.g. lack of cause of action, limitation, jurisdiction",
        "type": "textarea"
      },
      {
        "id": "admittedDeniedNotWithinDefendantsKnowledgeWithReasons",
        "label": "Admitted / Denied / Not within Defendant's knowledge, with reasons",
        "type": "textarea"
      },
      {
        "id": "admittedDeniedWithTheDefendantsVersionOfFacts",
        "label": "Admitted / Denied, with the Defendant's version of facts",
        "type": "textarea"
      },
      {
        "id": "continueParagraphWiseReplyToEveryAvermentInThePlaint",
        "label": "Continue paragraph-wise reply to every averment in the Plaint",
        "type": "textarea"
      },
      {
        "id": "stateAnyAdditionalFactsInTheDefendantsFavourOrSetOutACounterClaimIfApplicable",
        "label": "State any additional facts in the Defendant's favour, or set out a counter-claim, if applicable",
        "type": "textarea"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>In the Court of <span class=\"filled\">{{civilJudgeCity}}</span></h2>\n<p class=\"sub-center\">Civil Suit No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{plaintiffsName}}</span></strong> ... Plaintiff<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{defendantsName}}</span></strong> ... Defendant</p>\n\n<p style=\"text-align:center;\"><strong>WRITTEN STATEMENT ON BEHALF OF THE DEFENDANT</strong></p>\n\n<p><strong>PRELIMINARY OBJECTIONS</strong></p>\n<ol class=\"clauses\">\n<li>That the suit as framed is not maintainable in law and on facts, on the ground that <span class=\"filled\">{{stateLegalObjectionEGLackOfCauseOfActionLimitationJurisdiction}}</span>.</li>\n<li>That the suit is bad for non-joinder/mis-joinder of necessary parties.</li>\n<li>That the suit is barred by limitation under the Limitation Act, 1963.</li>\n</ol>\n\n<p><strong>REPLY ON MERITS</strong> (paragraph-wise reply corresponding to the numbering in the Plaint)</p>\n<ol class=\"clauses\">\n<li>In reply to paragraph 1 of the Plaint: <span class=\"filled\">{{admittedDeniedNotWithinDefendantsKnowledgeWithReasons}}</span>.</li>\n<li>In reply to paragraph 2 of the Plaint: <span class=\"filled\">{{admittedDeniedWithTheDefendantsVersionOfFacts}}</span>.</li>\n<li>In reply to the remaining paragraphs: <span class=\"filled\">{{continueParagraphWiseReplyToEveryAvermentInThePlaint}}</span>.</li>\n</ol>\n\n<p><strong>ADDITIONAL FACTS / COUNTER-CLAIM (if any)</strong></p>\n<p><span class=\"filled\">{{stateAnyAdditionalFactsInTheDefendantsFavourOrSetOutACounterClaimIfApplicable}}</span>.</p>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore prayed that this Hon'ble Court may be pleased to dismiss the suit of the Plaintiff with costs, and pass such other order(s) as deemed fit.</p>\n\n<p><strong>VERIFICATION</strong></p>\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> that the contents of the above Written Statement are true to my knowledge and belief.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Defendant / Counsel</div></div>\n</div>\n\n<div class=\"note-box\">Under Order VIII Rule 1, CPC, the written statement must generally be filed within 30 days of service of summons, extendable up to 90 days (120 days in commercial suits) for reasons to be recorded by the court.</div>\n",
    "price": 149
  },
  {
    "slug": "legal-notice",
    "title": "Legal Notice",
    "act": "Indian Contract Act, 1872 / general practice",
    "shelf": "Civil & Contract Law",
    "docType": "Notice",
    "fields": [
      {
        "id": "advocatesNameIfSentThroughCounsel",
        "label": "Advocate's Name, if sent through counsel",
        "type": "text"
      },
      {
        "id": "clientsFullNameAndAddress",
        "label": "Client's Full Name and Address",
        "type": "text"
      },
      {
        "id": "recipientsFullNameAndAddress",
        "label": "Recipient's Full Name and Address",
        "type": "text"
      },
      {
        "id": "briefSubjectEGRecoveryOfDuesBreachOfAgreement",
        "label": "brief subject, e.g. recovery of dues / breach of agreement",
        "type": "textarea"
      },
      {
        "id": "clientsName",
        "label": "Client's Name",
        "type": "text"
      },
      {
        "id": "natureOfTransactionAgreement",
        "label": "nature of transaction/agreement",
        "type": "textarea"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "recipientsObligation",
        "label": "recipient's obligation",
        "type": "text"
      },
      {
        "id": "descriptionOfTheBreachOrDefault",
        "label": "description of the breach or default",
        "type": "textarea"
      },
      {
        "id": "remedySought",
        "label": "remedy sought",
        "type": "text"
      },
      {
        "id": "specificDemandEGPayASumOfRsPerformTheObligationCeaseTheConductComplainedOf",
        "label": "specific demand, e.g. pay a sum of Rs. ___ / perform the obligation / cease the conduct complained of",
        "type": "textarea"
      },
      {
        "id": "eG1530",
        "label": "e.g. 15 / 30",
        "type": "text"
      },
      {
        "id": "advocateSendersName",
        "label": "Advocate / Sender's Name",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Legal Notice</h2>\n\n<p>From:<br>\n<span class=\"filled\">{{advocatesNameIfSentThroughCounsel}}</span><br>\nOn behalf of: <span class=\"filled\">{{clientsFullNameAndAddress}}</span></p>\n\n<p>To:<br>\n<span class=\"filled\">{{recipientsFullNameAndAddress}}</span></p>\n\n<p><strong>Subject: Legal Notice regarding <span class=\"filled\">{{briefSubjectEGRecoveryOfDuesBreachOfAgreement}}</span></strong></p>\n\n<p>Sir/Madam,</p>\n\n<p>Under instructions from and on behalf of my client, <span class=\"filled\">{{clientsName}}</span>, I hereby serve upon you the following notice:</p>\n\n<ol class=\"clauses\">\n<li>That my client and you entered into <span class=\"filled\">{{natureOfTransactionAgreement}}</span> on <span class=\"filled\">{{date}}</span>, under which you were obligated to <span class=\"filled\">{{recipientsObligation}}</span>.</li>\n<li>That despite the above, you have <span class=\"filled\">{{descriptionOfTheBreachOrDefault}}</span>, causing loss and inconvenience to my client.</li>\n<li>That my client has, on prior occasions, requested you to <span class=\"filled\">{{remedySought}}</span>, but you have failed and neglected to do so.</li>\n</ol>\n\n<p>I therefore call upon you, through this notice, to <span class=\"filled\">{{specificDemandEGPayASumOfRsPerformTheObligationCeaseTheConductComplainedOf}}</span>\nwithin <span class=\"filled\">{{eG1530}}</span> days from the receipt of this notice, failing which my client shall be constrained to initiate appropriate legal proceedings against you,\nboth civil and criminal as advised, entirely at your risk, cost and consequences, without any further reference to you.</p>\n\n<p>A copy of this notice is retained in my office for record and future reference.</p>\n\n<p>Yours faithfully,</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature<br><span class=\"filled\">{{advocateSendersName}}</span><br>Date: <span class=\"filled\">{{date2}}</span></div></div>\n</div>\n\n<div class=\"note-box\">Send by Registered Post with Acknowledgement Due (RPAD) or speed post, and retain the postal receipt/tracking proof, as this often becomes important evidence in any later proceeding.</div>\n",
    "price": 49
  },
  {
    "slug": "general-affidavit",
    "title": "General Affidavit",
    "act": "Order XIX, Code of Civil Procedure, 1908 / Indian Evidence framework",
    "shelf": "Civil & Contract Law",
    "docType": "Affidavit",
    "fields": [
      {
        "id": "fullNameOfDeponent",
        "label": "Full Name of Deponent",
        "type": "text"
      },
      {
        "id": "fathersHusbandsName",
        "label": "Father's/Husband's Name",
        "type": "text"
      },
      {
        "id": "age",
        "label": "Age",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "firstFactBeingDeposedTo",
        "label": "First fact being deposed to",
        "type": "text"
      },
      {
        "id": "secondFactBeingDeposedTo",
        "label": "Second fact being deposed to",
        "type": "text"
      },
      {
        "id": "thirdFactBeingDeposedToAddRemoveParagraphsAsNeeded",
        "label": "Third fact being deposed to, add/remove paragraphs as needed",
        "type": "textarea"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>Affidavit</h2>\n\n<p>I, <span class=\"filled\">{{fullNameOfDeponent}}</span>, son/daughter/wife of <span class=\"filled\">{{fathersHusbandsName}}</span>, aged about <span class=\"filled\">{{age}}</span> years,\nresiding at <span class=\"filled\">{{completeAddress}}</span>, do hereby solemnly affirm and declare as under:</p>\n\n<ol class=\"clauses\">\n<li>That I am the Deponent herein and am fully conversant with the facts of the case, and am competent to swear this affidavit.</li>\n<li>That <span class=\"filled\">{{firstFactBeingDeposedTo}}</span>.</li>\n<li>That <span class=\"filled\">{{secondFactBeingDeposedTo}}</span>.</li>\n<li>That <span class=\"filled\">{{thirdFactBeingDeposedToAddRemoveParagraphsAsNeeded}}</span>.</li>\n<li>That the contents of this affidavit are true and correct to my knowledge, and no part of it is false, and nothing material has been concealed therefrom.</li>\n</ol>\n\n<p><strong>DEPONENT</strong></p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Deponent</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>VERIFICATION</strong></p>\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> that the contents of the above affidavit are true and correct to my knowledge, and no part of it is false, and nothing material has been concealed therefrom.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Deponent</div></div>\n</div>\n\n<div class=\"note-box\">To be sworn before a Notary Public, Oath Commissioner, or Executive Magistrate, on stamp paper of the value prescribed by the relevant State Stamp Act (some states permit affidavits for court proceedings on plain paper).</div>\n",
    "price": 49
  },
  {
    "slug": "partnership-deed",
    "title": "Partnership Deed",
    "act": "Indian Partnership Act, 1932",
    "shelf": "Civil & Contract Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "partner1FullNameAddress",
        "label": "Partner 1 Full Name & Address",
        "type": "text"
      },
      {
        "id": "partner2FullNameAddress",
        "label": "Partner 2 Full Name & Address",
        "type": "text"
      },
      {
        "id": "addFurtherPartnersAsApplicable",
        "label": "(add further partners as applicable)",
        "type": "text"
      },
      {
        "id": "firmName",
        "label": "Firm Name",
        "type": "text"
      },
      {
        "id": "principalPlaceOfBusinessAddress",
        "label": "Principal Place of Business Address",
        "type": "text"
      },
      {
        "id": "natureOfBusiness",
        "label": "Nature of Business",
        "type": "textarea"
      },
      {
        "id": "startDate",
        "label": "Start Date",
        "type": "text"
      },
      {
        "id": "atWillForAFixedTermOfYears",
        "label": "at will / for a fixed term of ___ years",
        "type": "text"
      },
      {
        "id": "eGPartner150Partner250",
        "label": "e.g. Partner 1 — 50%, Partner 2 — 50%",
        "type": "text"
      },
      {
        "id": "profitSharingRatio",
        "label": "Profit sharing ratio",
        "type": "text"
      },
      {
        "id": "nameSOfAuthorisedSignatories",
        "label": "name(s) of authorised signatories",
        "type": "text"
      },
      {
        "id": "witness1Name",
        "label": "Witness 1 Name",
        "type": "text"
      },
      {
        "id": "witness2Name",
        "label": "Witness 2 Name",
        "type": "text"
      }
    ],
    "template": "\n<h2>Deed of Partnership</h2>\n\n<p>THIS DEED OF PARTNERSHIP is made on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> at <span class=\"filled\">{{place}}</span>, BETWEEN:</p>\n\n<p>1. <span class=\"filled\">{{partner1FullNameAddress}}</span><br>\n2. <span class=\"filled\">{{partner2FullNameAddress}}</span><br>\n<span class=\"filled\">{{addFurtherPartnersAsApplicable}}</span></p>\n\n<p>(hereinafter collectively referred to as the \"PARTNERS\").</p>\n\n<hr class=\"divider\">\n<p><strong>WHEREAS</strong> the parties have agreed to carry on business in partnership on the terms and conditions set out below.</p>\n\n<p><strong>IT IS HEREBY AGREED AS FOLLOWS:</strong></p>\n<ol class=\"clauses\">\n<li><strong>Name & Place of Business:</strong> The partnership shall carry on business under the name and style of \"<span class=\"filled\">{{firmName}}</span>\" at <span class=\"filled\">{{principalPlaceOfBusinessAddress}}</span>.</li>\n<li><strong>Nature of Business:</strong> The partnership shall carry on the business of <span class=\"filled\">{{natureOfBusiness}}</span>.</li>\n<li><strong>Commencement & Duration:</strong> The partnership shall commence from <span class=\"filled\">{{startDate}}</span> and shall be <span class=\"filled\">{{atWillForAFixedTermOfYears}}</span>.</li>\n<li><strong>Capital Contribution:</strong> The Partners shall contribute capital in the following ratio: <span class=\"filled\">{{eGPartner150Partner250}}</span>.</li>\n<li><strong>Profit & Loss Sharing:</strong> Profits and losses of the firm shall be shared among the Partners in the ratio of <span class=\"filled\">{{profitSharingRatio}}</span>.</li>\n<li><strong>Bank Account:</strong> The firm shall operate a bank account in its name, to be operated by <span class=\"filled\">{{nameSOfAuthorisedSignatories}}</span>.</li>\n<li><strong>Books of Account:</strong> Proper books of account shall be maintained at the principal place of business and shall be open for inspection by all Partners.</li>\n<li><strong>Admission/Retirement:</strong> No new partner shall be admitted, and no existing Partner shall retire, except with the written consent of all Partners, subject to the settlement of accounts as agreed.</li>\n<li><strong>Dissolution:</strong> The partnership may be dissolved by mutual consent of all Partners, or as otherwise provided under the Indian Partnership Act, 1932.</li>\n</ol>\n\n<p>IN WITNESS WHEREOF the Partners have set their hands on this deed on the day and year first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Partner 1</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Partner 2</div></div>\n</div>\n\n<p style=\"margin-top:26px;\"><strong>WITNESSES:</strong></p>\n<p>1. Name: <span class=\"filled\">{{witness1Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n<p>2. Name: <span class=\"filled\">{{witness2Name}}</span> &nbsp;&nbsp; Signature: _______________</p>\n\n<div class=\"note-box\">The deed should be executed on stamp paper of the value prescribed by the State Stamp Act. Registration with the Registrar of Firms under Section 58 of the Indian Partnership Act, 1932 is optional but strongly advisable, as an unregistered firm cannot sue third parties to enforce its contracts.</div>\n",
    "price": 149
  },
  {
    "slug": "spice-plus-incorporation",
    "title": "SPICe+ (Company Incorporation)",
    "act": "Companies Act, 2013",
    "shelf": "Corporate & Business Law",
    "docType": "Government e-Form — Field Reference",
    "fields": [
      {
        "id": "nameOption1NameOption2",
        "label": "Name Option 1, Name Option 2",
        "type": "text"
      },
      {
        "id": "privatePublicOpcSection8Etc",
        "label": "Private / Public / OPC / Section 8, etc.",
        "type": "text"
      },
      {
        "id": "briefDescriptionOfMainBusinessActivity",
        "label": "Brief description of main business activity",
        "type": "textarea"
      },
      {
        "id": "completeAddressWithPin",
        "label": "Complete Address with PIN",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "Amount",
        "type": "text"
      },
      {
        "id": "nameDinIfAnyPanAadhaarAddressOfEachDirector",
        "label": "Name, DIN (if any), PAN, Aadhaar, Address of each Director",
        "type": "textarea"
      },
      {
        "id": "nameAddressSharesSubscribed",
        "label": "Name, Address, Shares subscribed",
        "type": "text"
      }
    ],
    "template": "\n<h2>SPICe+ (INC-32) — Field Reference</h2>\n<p class=\"sub-center\">Simplified Proforma for Incorporating a Company Electronically Plus</p>\n\n<div class=\"note-box\">SPICe+ is filed exclusively online on the MCA portal (www.mca.gov.in) via Part A (name reservation) and Part B (incorporation, PAN, TAN, EPFO, ESIC, GST, bank account). It cannot be filed on paper. The reference below lists the information you should have ready before starting the e-form.</div>\n\n<p><strong>PART A — NAME RESERVATION</strong></p>\n<table class=\"field-table\">\n<tr><th>Proposed Company Names (up to 2)</th><td><span class=\"filled\">{{nameOption1NameOption2}}</span></td></tr>\n<tr><th>Type of Company</th><td><span class=\"filled\">{{privatePublicOpcSection8Etc}}</span></td></tr>\n<tr><th>Object of the Company</th><td><span class=\"filled\">{{briefDescriptionOfMainBusinessActivity}}</span></td></tr>\n</table>\n\n<p><strong>PART B — INCORPORATION DETAILS</strong></p>\n<table class=\"field-table\">\n<tr><th>Registered Office Address</th><td><span class=\"filled\">{{completeAddressWithPin}}</span></td></tr>\n<tr><th>Authorised & Paid-up Share Capital</th><td><span class=\"filled\">{{amount}}</span></td></tr>\n<tr><th>Directors' Details</th><td><span class=\"filled\">{{nameDinIfAnyPanAadhaarAddressOfEachDirector}}</span></td></tr>\n<tr><th>Shareholders' Details</th><td><span class=\"filled\">{{nameAddressSharesSubscribed}}</span></td></tr>\n<tr><th>PAN & TAN</th><td>Auto-generated on incorporation via SPICe+</td></tr>\n</table>\n\n<p><strong>Linked forms filed along with SPICe+:</strong></p>\n<ol class=\"clauses\">\n<li>e-MOA (INC-33) and e-AOA (INC-34) — or physical MOA/AOA for certain company types</li>\n<li>AGILE-PRO-S — for GSTIN, EPFO, ESIC, Profession Tax and Bank Account</li>\n<li>INC-9 — Declaration by first Directors/Subscribers</li>\n</ol>\n\n<div class=\"note-box\">Fees, document checklist and specific attachments (e.g. NOC from property owner for registered office, DSC of directors) change periodically — always confirm the current requirements on the MCA portal before filing.</div>\n",
    "price": 149
  },
  {
    "slug": "moa-aoa",
    "title": "Memorandum & Articles of Association (MOA/AOA)",
    "act": "Companies Act, 2013, Sections 4 & 5",
    "shelf": "Corporate & Business Law",
    "docType": "Deed",
    "fields": [
      {
        "id": "companyName",
        "label": "Company Name",
        "type": "text"
      },
      {
        "id": "companyName2",
        "label": "Company Name (2)",
        "type": "text"
      },
      {
        "id": "privateLimitedLimited",
        "label": "Private Limited / Limited",
        "type": "text"
      },
      {
        "id": "state",
        "label": "State",
        "type": "text"
      },
      {
        "id": "mainBusinessActivityObjects",
        "label": "Main business activity/objects",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "Amount",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "faceValue",
        "label": "Face Value",
        "type": "text"
      },
      {
        "id": "nameAddress",
        "label": "Name, Address",
        "type": "text"
      },
      {
        "id": "number2",
        "label": "Number (2)",
        "type": "text"
      },
      {
        "id": "companyName3",
        "label": "Company Name (3)",
        "type": "text"
      },
      {
        "id": "numberEG2ForPrivateCompany",
        "label": "number, e.g. 2 for private company",
        "type": "text"
      },
      {
        "id": "number3",
        "label": "number",
        "type": "text"
      },
      {
        "id": "eGCalendarQuarterPerSection173",
        "label": "e.g. calendar quarter, per Section 173",
        "type": "text"
      }
    ],
    "template": "\n<h2>Memorandum of Association</h2>\n<p class=\"sub-center\">Of <span class=\"filled\">{{companyName}}</span></p>\n\n<p><strong>I. NAME CLAUSE:</strong> The name of the Company is \"<span class=\"filled\">{{companyName2}}</span> <span class=\"filled\">{{privateLimitedLimited}}</span>\".</p>\n<p><strong>II. REGISTERED OFFICE CLAUSE:</strong> The registered office of the Company will be situated in the State of <span class=\"filled\">{{state}}</span>.</p>\n<p><strong>III. OBJECTS CLAUSE:</strong></p>\n<ol class=\"clauses\">\n<li>The main objects to be pursued by the Company on its incorporation are: <span class=\"filled\">{{mainBusinessActivityObjects}}</span>.</li>\n<li>Matters which are necessary for furtherance of the objects specified in the main object clause.</li>\n</ol>\n<p><strong>IV. LIABILITY CLAUSE:</strong> The liability of the members is limited, and is limited to the amount unpaid, if any, on the shares held by them.</p>\n<p><strong>V. CAPITAL CLAUSE:</strong> The Authorised Share Capital of the Company is ₹<span class=\"filled\">{{amount}}</span> divided into <span class=\"filled\">{{number}}</span> equity shares of ₹<span class=\"filled\">{{faceValue}}</span> each.</p>\n\n<p><strong>VI. SUBSCRIPTION CLAUSE</strong></p>\n<table class=\"field-table\">\n<tr><th>Subscriber's Name & Address</th><td><span class=\"filled\">{{nameAddress}}</span></td></tr>\n<tr><th>Number of Shares Subscribed</th><td><span class=\"filled\">{{number2}}</span></td></tr>\n</table>\n\n<hr class=\"divider\">\n<h2>Articles of Association</h2>\n<p class=\"sub-center\">Of <span class=\"filled\">{{companyName3}}</span></p>\n\n<p>The regulations in Table F of Schedule I to the Companies Act, 2013 shall apply to the Company insofar as they are not excluded or modified below, and shall be regarded as forming part of these Articles.</p>\n\n<ol class=\"clauses\">\n<li><strong>Share Capital:</strong> The Company's share capital shall be as stated in the Memorandum, and shares may be issued as ordinary or preference shares as the Board decides.</li>\n<li><strong>Board of Directors:</strong> The Company shall have a minimum of <span class=\"filled\">{{numberEG2ForPrivateCompany}}</span> and a maximum of <span class=\"filled\">{{number3}}</span> Directors.</li>\n<li><strong>Board Meetings:</strong> The Board shall meet at least once every <span class=\"filled\">{{eGCalendarQuarterPerSection173}}</span>, with notice of not less than 7 days.</li>\n<li><strong>General Meetings:</strong> An Annual General Meeting shall be held every year in accordance with Section 96 of the Companies Act, 2013.</li>\n<li><strong>Transfer of Shares:</strong> Shares shall be transferable subject to the restrictions, if any, set out in these Articles and applicable law.</li>\n<li><strong>Dividends:</strong> Dividends shall be declared and paid in accordance with the Companies Act, 2013, out of profits of the Company.</li>\n</ol>\n\n<div class=\"note-box\">MOA and AOA are filed as linked e-forms (INC-33/INC-34) with SPICe+ at the time of incorporation. Clauses should be tailored to the specific company's business, capital structure and governance needs — this is a reference skeleton, not a filing-ready document.</div>\n",
    "price": 149
  },
  {
    "slug": "partnership-firm-registration",
    "title": "Partnership Firm Registration Form",
    "act": "Indian Partnership Act, 1932, Section 58",
    "shelf": "Corporate & Business Law",
    "docType": "Government Form — Field Reference",
    "fields": [
      {
        "id": "stateDistrict",
        "label": "State / District",
        "type": "text"
      },
      {
        "id": "firmName",
        "label": "Firm Name",
        "type": "text"
      },
      {
        "id": "completeAddress",
        "label": "Complete Address",
        "type": "text"
      },
      {
        "id": "addressEsOrNone",
        "label": "Address(es), or 'None'",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "atWillFixedTerm",
        "label": "At will / Fixed term",
        "type": "text"
      },
      {
        "id": "listEachPartnersFullNameAndAddress",
        "label": "List each partner's full name and address",
        "type": "textarea"
      },
      {
        "id": "dateS",
        "label": "Date(s)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application for Registration of Firm — Form 1</h2>\n<p class=\"sub-center\">Under Section 58, Indian Partnership Act, 1932</p>\n\n<p>To,<br>The Registrar of Firms, <span class=\"filled\">{{stateDistrict}}</span></p>\n\n<table class=\"field-table\">\n<tr><th>Name of the Firm</th><td><span class=\"filled\">{{firmName}}</span></td></tr>\n<tr><th>Principal Place of Business</th><td><span class=\"filled\">{{completeAddress}}</span></td></tr>\n<tr><th>Other Places of Business (if any)</th><td><span class=\"filled\">{{addressEsOrNone}}</span></td></tr>\n<tr><th>Date of Commencement of Business</th><td><span class=\"filled\">{{date}}</span></td></tr>\n<tr><th>Duration of Firm</th><td><span class=\"filled\">{{atWillFixedTerm}}</span></td></tr>\n<tr><th>Names & Addresses of All Partners</th><td><span class=\"filled\">{{listEachPartnersFullNameAndAddress}}</span></td></tr>\n<tr><th>Date Each Partner Joined the Firm</th><td><span class=\"filled\">{{dateS}}</span></td></tr>\n</table>\n\n<p><strong>Documents typically required:</strong></p>\n<ol class=\"clauses\">\n<li>Duly filled and signed Form 1 (this application)</li>\n<li>Certified copy of the Partnership Deed</li>\n<li>Proof of principal place of business (ownership/rent proof + NOC, if rented)</li>\n<li>ID and address proof of all partners</li>\n<li>Affidavit certifying the correctness of the details in the application</li>\n</ol>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Partner 1</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Signature of Partner 2</div></div>\n</div>\n\n<div class=\"note-box\">Registration is done at the state Registrar of Firms office; several states now offer online filing. Registration is not mandatory but is highly recommended, as an unregistered firm is barred under Section 69 of the Act from suing third parties to enforce its contracts.</div>\n",
    "price": 149
  },
  {
    "slug": "nda",
    "title": "Non-Disclosure Agreement (NDA)",
    "act": "Indian Contract Act, 1872",
    "shelf": "Corporate & Business Law",
    "docType": "Agreement",
    "fields": [
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      },
      {
        "id": "disclosingPartyName",
        "label": "Disclosing Party Name",
        "type": "text"
      },
      {
        "id": "registeredOfficeAddress",
        "label": "registered office / address",
        "type": "text"
      },
      {
        "id": "address",
        "label": "Address",
        "type": "text"
      },
      {
        "id": "receivingPartyName",
        "label": "Receiving Party Name",
        "type": "text"
      },
      {
        "id": "registeredOfficeAddress2",
        "label": "registered office / address (2)",
        "type": "text"
      },
      {
        "id": "address2",
        "label": "Address (2)",
        "type": "text"
      },
      {
        "id": "purposeEGAPotentialBusinessRelationshipCollaboration",
        "label": "purpose, e.g. a potential business relationship / collaboration",
        "type": "textarea"
      },
      {
        "id": "durationEG23Years",
        "label": "Duration, e.g. 2 / 3 years",
        "type": "text"
      },
      {
        "id": "survivalPeriodEGAnAdditional2Years",
        "label": "Survival period, e.g. an additional 2 years",
        "type": "text"
      },
      {
        "id": "city",
        "label": "City",
        "type": "text"
      }
    ],
    "template": "\n<h2>Non-Disclosure Agreement</h2>\n\n<p>THIS NON-DISCLOSURE AGREEMENT (\"Agreement\") is entered into on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span>, BETWEEN:</p>\n\n<p><strong><span class=\"filled\">{{disclosingPartyName}}</span></strong>, having its <span class=\"filled\">{{registeredOfficeAddress}}</span> at <span class=\"filled\">{{address}}</span> (hereinafter the \"DISCLOSING PARTY\");</p>\n\n<p><strong>AND</strong></p>\n\n<p><strong><span class=\"filled\">{{receivingPartyName}}</span></strong>, having its <span class=\"filled\">{{registeredOfficeAddress2}}</span> at <span class=\"filled\">{{address2}}</span> (hereinafter the \"RECEIVING PARTY\").</p>\n\n<p>(Each individually a \"Party\" and collectively the \"Parties\".)</p>\n\n<ol class=\"clauses\">\n<li><strong>Purpose:</strong> The Parties wish to explore <span class=\"filled\">{{purposeEGAPotentialBusinessRelationshipCollaboration}}</span>, in connection with which the Disclosing Party may share confidential information with the Receiving Party.</li>\n<li><strong>Definition of Confidential Information:</strong> \"Confidential Information\" means all non-public information disclosed by the Disclosing Party, whether oral, written or electronic, including but not limited to business plans, financial data, technical data, trade secrets and client information.</li>\n<li><strong>Obligations:</strong> The Receiving Party shall (a) hold the Confidential Information in strict confidence; (b) use it solely for the Purpose stated above; and (c) not disclose it to any third party without the Disclosing Party's prior written consent.</li>\n<li><strong>Exclusions:</strong> This Agreement shall not apply to information that (a) is or becomes publicly available through no fault of the Receiving Party; (b) was already known to the Receiving Party prior to disclosure; or (c) is required to be disclosed by law or court order.</li>\n<li><strong>Term:</strong> This Agreement shall remain in force for a period of <span class=\"filled\">{{durationEG23Years}}</span> from the date hereof, and the confidentiality obligations shall survive for <span class=\"filled\">{{survivalPeriodEGAnAdditional2Years}}</span> thereafter.</li>\n<li><strong>Return of Information:</strong> Upon termination of discussions or on request, the Receiving Party shall return or destroy all Confidential Information and confirm the same in writing.</li>\n<li><strong>Governing Law & Jurisdiction:</strong> This Agreement shall be governed by the laws of India, and the courts at <span class=\"filled\">{{city}}</span> shall have exclusive jurisdiction over any disputes arising hereunder.</li>\n</ol>\n\n<p>IN WITNESS WHEREOF the Parties have executed this Agreement on the date first above written.</p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">For the Disclosing Party</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">For the Receiving Party</div></div>\n</div>\n",
    "price": 149
  },
  {
    "slug": "employment-appointment-letter",
    "title": "Employment Appointment Letter",
    "act": "Indian Contract Act, 1872 / applicable Shops & Establishments Act",
    "shelf": "Corporate & Business Law",
    "docType": "Letter / Agreement",
    "fields": [
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "employeesFullName",
        "label": "Employee's Full Name",
        "type": "text"
      },
      {
        "id": "employeesAddress",
        "label": "Employee's Address",
        "type": "text"
      },
      {
        "id": "designation",
        "label": "Designation",
        "type": "text"
      },
      {
        "id": "employeesFirstName",
        "label": "Employee's First Name",
        "type": "text"
      },
      {
        "id": "companyName",
        "label": "Company Name",
        "type": "text"
      },
      {
        "id": "designation2",
        "label": "Designation (2)",
        "type": "text"
      },
      {
        "id": "departmentReportingManagersNameDesignation",
        "label": "Department, Reporting Manager's Name & Designation",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      },
      {
        "id": "location",
        "label": "Location",
        "type": "text"
      },
      {
        "id": "amountWithBreakupAsPerAnnexure",
        "label": "₹ Amount, with breakup as per Annexure",
        "type": "text"
      },
      {
        "id": "eG6MonthsFromDateOfJoining",
        "label": "e.g. 6 months from date of joining",
        "type": "text"
      },
      {
        "id": "eG306090Days",
        "label": "e.g. 30 / 60 / 90 days",
        "type": "text"
      },
      {
        "id": "noticePeriod",
        "label": "Notice Period",
        "type": "text"
      },
      {
        "id": "companyName2",
        "label": "Company Name (2)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Appointment Letter</h2>\n\n<p>Date: <span class=\"filled\">{{date}}</span></p>\n<p>To,<br><span class=\"filled\">{{employeesFullName}}</span><br><span class=\"filled\">{{employeesAddress}}</span></p>\n\n<p><strong>Subject: Letter of Appointment for the position of <span class=\"filled\">{{designation}}</span></strong></p>\n\n<p>Dear <span class=\"filled\">{{employeesFirstName}}</span>,</p>\n\n<p>We are pleased to offer you employment with <span class=\"filled\">{{companyName}}</span> (\"the Company\") on the following terms and conditions:</p>\n\n<table class=\"field-table\">\n<tr><th>Designation</th><td><span class=\"filled\">{{designation2}}</span></td></tr>\n<tr><th>Department / Reporting To</th><td><span class=\"filled\">{{departmentReportingManagersNameDesignation}}</span></td></tr>\n<tr><th>Date of Joining</th><td><span class=\"filled\">{{date2}}</span></td></tr>\n<tr><th>Place of Posting</th><td><span class=\"filled\">{{location}}</span></td></tr>\n<tr><th>Compensation (CTC per annum)</th><td><span class=\"filled\">{{amountWithBreakupAsPerAnnexure}}</span></td></tr>\n<tr><th>Probation Period</th><td><span class=\"filled\">{{eG6MonthsFromDateOfJoining}}</span></td></tr>\n<tr><th>Notice Period</th><td><span class=\"filled\">{{eG306090Days}}</span></td></tr>\n</table>\n\n<p><strong>Terms of Employment:</strong></p>\n<ol class=\"clauses\">\n<li>You will be on probation for the period stated above, at the end of which your services will be confirmed subject to satisfactory performance.</li>\n<li>You shall devote your full time and attention to the business of the Company and shall not engage in any other employment or business without prior written consent.</li>\n<li>You shall maintain strict confidentiality of all proprietary and business information of the Company, both during and after your employment.</li>\n<li>Either party may terminate this employment by giving <span class=\"filled\">{{noticePeriod}}</span> written notice, or pay in lieu thereof, subject to the Company's policies and applicable law.</li>\n<li>You shall be governed by the Company's policies, code of conduct and applicable service rules, as amended from time to time.</li>\n</ol>\n\n<p>Please sign and return the duplicate copy of this letter as a token of your acceptance of the above terms.</p>\n\n<p>We look forward to a long and mutually rewarding association.</p>\n\n<p>Yours sincerely,<br>For <span class=\"filled\">{{companyName2}}</span></p>\n\n<div class=\"signature-block\">\n  <div class=\"sig-col\"><div class=\"sig-line\">Authorised Signatory</div></div>\n  <div class=\"sig-col\"><div class=\"sig-line\">Acceptance — Employee's Signature</div></div>\n</div>\n",
    "price": 79
  },
  {
    "slug": "consumer-complaint-edaakhil",
    "title": "Consumer Complaint (E-Daakhil)",
    "act": "Consumer Protection Act, 2019",
    "shelf": "Consumer Protection Law",
    "docType": "Complaint",
    "fields": [
      {
        "id": "districtStateNationalConsumerDisputesRedressalCommission",
        "label": "District / State / National Consumer Disputes Redressal Commission",
        "type": "textarea"
      },
      {
        "id": "city",
        "label": "City",
        "type": "text"
      },
      {
        "id": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "id": "complainantsFullNameAddress",
        "label": "Complainant's Full Name & Address",
        "type": "text"
      },
      {
        "id": "oppositePartysNameAddress",
        "label": "Opposite Party's Name & Address",
        "type": "text"
      },
      {
        "id": "goodsAvailedServicesWithDetails",
        "label": "goods / availed services, with details",
        "type": "text"
      },
      {
        "id": "dateOfPurchase",
        "label": "Date of Purchase",
        "type": "text"
      },
      {
        "id": "invoiceNumber",
        "label": "Invoice Number",
        "type": "text"
      },
      {
        "id": "amountPaid",
        "label": "Amount Paid",
        "type": "text"
      },
      {
        "id": "goodsServices",
        "label": "goods/services",
        "type": "text"
      },
      {
        "id": "detailedDescriptionOfTheDeficiency",
        "label": "Detailed description of the deficiency",
        "type": "textarea"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "remedySoughtEGReplacementRefundRepair",
        "label": "remedy sought, e.g. replacement/refund/repair",
        "type": "text"
      },
      {
        "id": "refundReplaceRepairAsApplicable",
        "label": "Refund / replace / repair, as applicable",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "Amount",
        "type": "text"
      },
      {
        "id": "compensationAmount",
        "label": "Compensation Amount",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      },
      {
        "id": "day",
        "label": "Day",
        "type": "text"
      },
      {
        "id": "monthYear",
        "label": "Month, Year",
        "type": "text"
      }
    ],
    "template": "\n<h2>Consumer Complaint</h2>\n<p class=\"sub-center\">Under the Consumer Protection Act, 2019</p>\n\n<p>Before the <span class=\"filled\">{{districtStateNationalConsumerDisputesRedressalCommission}}</span>, <span class=\"filled\">{{city}}</span></p>\n<p class=\"sub-center\">Complaint No. _______ of <span class=\"filled\">{{year}}</span></p>\n\n<p><strong><span class=\"filled\">{{complainantsFullNameAddress}}</span></strong> ... Complainant<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{oppositePartysNameAddress}}</span></strong> ... Opposite Party</p>\n\n<p style=\"text-align:center;\"><strong>COMPLAINT UNDER SECTION 35, CONSUMER PROTECTION ACT, 2019</strong></p>\n\n<ol class=\"clauses\">\n<li>That the Complainant purchased <span class=\"filled\">{{goodsAvailedServicesWithDetails}}</span> from the Opposite Party on <span class=\"filled\">{{dateOfPurchase}}</span>, vide invoice/receipt no. <span class=\"filled\">{{invoiceNumber}}</span>, for a consideration of ₹<span class=\"filled\">{{amountPaid}}</span>.</li>\n<li>That the said <span class=\"filled\">{{goodsServices}}</span> suffered from the following deficiency/defect/unfair trade practice: <span class=\"filled\">{{detailedDescriptionOfTheDeficiency}}</span>.</li>\n<li>That the Complainant brought this to the notice of the Opposite Party on <span class=\"filled\">{{date}}</span> and requested <span class=\"filled\">{{remedySoughtEGReplacementRefundRepair}}</span>, but the Opposite Party failed to redress the grievance.</li>\n<li>That the Complainant has suffered financial loss and mental agony on account of the above deficiency, and is entitled to compensation.</li>\n<li>That this Commission has territorial and pecuniary jurisdiction to entertain this complaint, and the complaint is filed within the limitation period of two years from the date of cause of action.</li>\n</ol>\n\n<p><strong>PRAYER</strong></p>\n<p>It is therefore prayed that this Hon'ble Commission may be pleased to direct the Opposite Party to:</p>\n<ol class=\"clauses\">\n<li><span class=\"filled\">{{refundReplaceRepairAsApplicable}}</span> — ₹<span class=\"filled\">{{amount}}</span>;</li>\n<li>Pay compensation of ₹<span class=\"filled\">{{compensationAmount}}</span> for the deficiency in service/mental agony caused;</li>\n<li>Pay the cost of litigation;</li>\n<li>Pass such other order(s) as this Hon'ble Commission deems fit.</li>\n</ol>\n\n<p><strong>VERIFICATION</strong></p>\n<p>Verified at <span class=\"filled\">{{place}}</span> on this <span class=\"filled\">{{day}}</span> day of <span class=\"filled\">{{monthYear}}</span> that the contents of the above complaint are true to my knowledge.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Complainant</div></div>\n</div>\n\n<div class=\"note-box\">Complaints are now largely filed online through the E-Daakhil portal (edaakhil.nic.in), which requires you to create an account, select the relevant Commission, and upload this complaint along with supporting evidence.</div>\n",
    "price": 149
  },
  {
    "slug": "legal-notice-consumer",
    "title": "Legal Notice to Opposite Party (Consumer)",
    "act": "Consumer Protection Act, 2019",
    "shelf": "Consumer Protection Law",
    "docType": "Notice",
    "fields": [
      {
        "id": "complainantsAdvocatesNameAndAddress",
        "label": "Complainant's/Advocate's Name and Address",
        "type": "text"
      },
      {
        "id": "traderServiceProvidersNameAndAddress",
        "label": "Trader / Service Provider's Name and Address",
        "type": "text"
      },
      {
        "id": "goodsServices",
        "label": "goods / services",
        "type": "text"
      },
      {
        "id": "invoiceOrderNumber",
        "label": "Invoice/Order Number",
        "type": "text"
      },
      {
        "id": "clientsName",
        "label": "Client's Name",
        "type": "text"
      },
      {
        "id": "goodsServices2",
        "label": "goods/services",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "number",
        "label": "Number",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "Amount",
        "type": "text"
      },
      {
        "id": "goodsServices3",
        "label": "goods/services (2)",
        "type": "text"
      },
      {
        "id": "descriptionOfDeficiency",
        "label": "Description of deficiency",
        "type": "textarea"
      },
      {
        "id": "dateS",
        "label": "Date(s)",
        "type": "text"
      },
      {
        "id": "specificRemedyDemandedEGRefundTheAmountReplaceTheProductRectifyTheService",
        "label": "specific remedy demanded, e.g. refund the amount / replace the product / rectify the service",
        "type": "textarea"
      },
      {
        "id": "eG15",
        "label": "e.g. 15",
        "type": "text"
      },
      {
        "id": "sendersName",
        "label": "Sender's Name",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Legal Notice</h2>\n<p class=\"sub-center\">Pre-complaint notice under the Consumer Protection Act, 2019</p>\n\n<p>From:<br><span class=\"filled\">{{complainantsAdvocatesNameAndAddress}}</span></p>\n<p>To:<br><span class=\"filled\">{{traderServiceProvidersNameAndAddress}}</span></p>\n\n<p><strong>Subject: Legal notice regarding deficiency in <span class=\"filled\">{{goodsServices}}</span> — <span class=\"filled\">{{invoiceOrderNumber}}</span></strong></p>\n\n<p>Sir/Madam,</p>\n\n<p>Under instructions from my client, <span class=\"filled\">{{clientsName}}</span>, I state as follows:</p>\n\n<ol class=\"clauses\">\n<li>My client purchased <span class=\"filled\">{{goodsServices2}}</span> from you on <span class=\"filled\">{{date}}</span> vide invoice/order no. <span class=\"filled\">{{number}}</span>, for a sum of ₹<span class=\"filled\">{{amount}}</span>.</li>\n<li>The said <span class=\"filled\">{{goodsServices3}}</span> suffered from the following deficiency: <span class=\"filled\">{{descriptionOfDeficiency}}</span>.</li>\n<li>Despite my client's request(s) dated <span class=\"filled\">{{dateS}}</span>, you have failed to redress the grievance.</li>\n</ol>\n\n<p>I therefore call upon you to <span class=\"filled\">{{specificRemedyDemandedEGRefundTheAmountReplaceTheProductRectifyTheService}}</span> within <span class=\"filled\">{{eG15}}</span> days of receipt of this notice,\nfailing which my client shall be constrained to approach the appropriate Consumer Disputes Redressal Commission for appropriate relief, including compensation, entirely at your risk and cost.</p>\n\n<p>Yours faithfully,</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature<br><span class=\"filled\">{{sendersName}}</span><br>Date: <span class=\"filled\">{{date2}}</span></div></div>\n</div>\n",
    "price": 49
  },
  {
    "slug": "termination-relieving-letter",
    "title": "Termination / Relieving Letter",
    "act": "Industrial Disputes Act, 1947 / Shops & Establishments Act",
    "shelf": "Labour & Employment Law",
    "docType": "Letter",
    "fields": [
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "employeesFullName",
        "label": "Employee's Full Name",
        "type": "text"
      },
      {
        "id": "employeeId",
        "label": "Employee ID",
        "type": "text"
      },
      {
        "id": "department",
        "label": "Department",
        "type": "text"
      },
      {
        "id": "relievingLetterTerminationOfEmployment",
        "label": "Relieving Letter / Termination of Employment",
        "type": "text"
      },
      {
        "id": "employeesFirstName",
        "label": "Employee's First Name",
        "type": "text"
      },
      {
        "id": "thisIsWithReferenceToYourResignationLetterDatedThisIsToInformYouThatYourServicesStandTerminatedChooseAsApplicable",
        "label": "This is with reference to your resignation letter dated ___ / This is to inform you that your services stand terminated, choose as applicable",
        "type": "textarea"
      },
      {
        "id": "companyName",
        "label": "Company Name",
        "type": "text"
      },
      {
        "id": "lastWorkingDay",
        "label": "Last Working Day",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      },
      {
        "id": "date3",
        "label": "Date (3)",
        "type": "text"
      },
      {
        "id": "resignationTerminationEndOfContractWithBriefReason",
        "label": "Resignation / Termination / End of Contract, with brief reason",
        "type": "textarea"
      },
      {
        "id": "details",
        "label": "Details",
        "type": "text"
      },
      {
        "id": "eG3045Days",
        "label": "e.g. 30 / 45 days",
        "type": "text"
      },
      {
        "id": "companyName2",
        "label": "Company Name (2)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Relieving / Termination Letter</h2>\n\n<p>Date: <span class=\"filled\">{{date}}</span></p>\n<p>To,<br><span class=\"filled\">{{employeesFullName}}</span><br><span class=\"filled\">{{employeeId}}</span><br><span class=\"filled\">{{department}}</span></p>\n\n<p><strong>Subject: <span class=\"filled\">{{relievingLetterTerminationOfEmployment}}</span></strong></p>\n\n<p>Dear <span class=\"filled\">{{employeesFirstName}}</span>,</p>\n\n<p><span class=\"filled\">{{thisIsWithReferenceToYourResignationLetterDatedThisIsToInformYouThatYourServicesStandTerminatedChooseAsApplicable}}</span>.\nThis letter confirms that your employment with <span class=\"filled\">{{companyName}}</span> stands ended with effect from <span class=\"filled\">{{lastWorkingDay}}</span>.</p>\n\n<table class=\"field-table\">\n<tr><th>Date of Joining</th><td><span class=\"filled\">{{date2}}</span></td></tr>\n<tr><th>Last Working Day</th><td><span class=\"filled\">{{date3}}</span></td></tr>\n<tr><th>Reason</th><td><span class=\"filled\">{{resignationTerminationEndOfContractWithBriefReason}}</span></td></tr>\n<tr><th>Notice Period Served / Pay in Lieu</th><td><span class=\"filled\">{{details}}</span></td></tr>\n</table>\n\n<p><strong>Full & Final Settlement:</strong></p>\n<ol class=\"clauses\">\n<li>Your full and final settlement, including salary dues, leave encashment and any other applicable dues, will be processed within <span class=\"filled\">{{eG3045Days}}</span> of your last working day.</li>\n<li>You are required to return all Company property, including ID card, laptop and access devices, before your last working day.</li>\n<li>Your obligations relating to confidentiality and non-disclosure, as agreed in your appointment letter, shall continue to survive after this termination/relieving.</li>\n</ol>\n\n<p>We thank you for your services and wish you the very best in your future endeavours.</p>\n\n<p>Yours sincerely,<br>For <span class=\"filled\">{{companyName2}}</span></p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Authorised Signatory</div></div>\n</div>\n",
    "price": 49
  },
  {
    "slug": "epf-withdrawal-form",
    "title": "EPF Withdrawal (Composite Claim Form 19/31)",
    "act": "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
    "shelf": "Labour & Employment Law",
    "docType": "Government Form — Field Reference",
    "fields": [
      {
        "id": "12DigitUan",
        "label": "12-digit UAN",
        "type": "text"
      },
      {
        "id": "fullName",
        "label": "Full Name",
        "type": "text"
      },
      {
        "id": "dob",
        "label": "DOB",
        "type": "text"
      },
      {
        "id": "aadhaarNumber",
        "label": "Aadhaar Number",
        "type": "text"
      },
      {
        "id": "bankDetailsLinkedToUan",
        "label": "Bank Details, linked to UAN",
        "type": "text"
      },
      {
        "id": "finalSettlementOnLeavingServiceAdvanceForSpecifiedPurposeMarriageIllnessHouseConstructionEtc",
        "label": "Final settlement on leaving service / Advance for specified purpose — marriage, illness, house construction, etc.",
        "type": "textarea"
      },
      {
        "id": "panRequiredForWithdrawalAbovePrescribedThresholdBefore5YearsOfService",
        "label": "PAN, required for withdrawal above prescribed threshold before 5 years of service",
        "type": "textarea"
      }
    ],
    "template": "\n<h2>Composite Claim Form (Aadhaar / Non-Aadhaar)</h2>\n<p class=\"sub-center\">EPF Withdrawal — Form 19 (Final Settlement) / Form 31 (Advance)</p>\n\n<div class=\"note-box\">This form is filed on the EPFO Unified Member Portal (unifiedportal-mem.epfindia.gov.in) once your UAN, Aadhaar and bank account are linked and KYC-verified. The reference below lists the details you'll need.</div>\n\n<table class=\"field-table\">\n<tr><th>UAN (Universal Account Number)</th><td><span class=\"filled\">{{12DigitUan}}</span></td></tr>\n<tr><th>Name (as per Aadhaar)</th><td><span class=\"filled\">{{fullName}}</span></td></tr>\n<tr><th>Date of Birth</th><td><span class=\"filled\">{{dob}}</span></td></tr>\n<tr><th>Aadhaar Number</th><td><span class=\"filled\">{{aadhaarNumber}}</span></td></tr>\n<tr><th>Bank Account Number & IFSC</th><td><span class=\"filled\">{{bankDetailsLinkedToUan}}</span></td></tr>\n<tr><th>Reason for Claim</th><td><span class=\"filled\">{{finalSettlementOnLeavingServiceAdvanceForSpecifiedPurposeMarriageIllnessHouseConstructionEtc}}</span></td></tr>\n<tr><th>PAN (if applicable)</th><td><span class=\"filled\">{{panRequiredForWithdrawalAbovePrescribedThresholdBefore5YearsOfService}}</span></td></tr>\n</table>\n\n<p><strong>Points to check before filing:</strong></p>\n<ol class=\"clauses\">\n<li>UAN is activated and linked with Aadhaar and a KYC-verified bank account</li>\n<li>For final settlement (Form 19), there must be a gap of at least 2 months since leaving employment (except in specific cases)</li>\n<li>For advance claims (Form 31), the purpose-specific eligibility and supporting documents (as listed on the EPFO portal for that purpose) are ready to upload</li>\n<li>Employer has approved/updated the date of exit on the portal, where applicable</li>\n</ol>\n\n<div class=\"note-box\">EPFO periodically updates online claim requirements and eligible advance purposes — always check the current process on the EPFO member portal before applying.</div>\n",
    "price": 149
  },
  {
    "slug": "gratuity-application",
    "title": "Gratuity Application (Form I)",
    "act": "Payment of Gratuity Act, 1972",
    "shelf": "Labour & Employment Law",
    "docType": "Government Form",
    "fields": [
      {
        "id": "companyEstablishmentNameAndAddress",
        "label": "Company/Establishment Name and Address",
        "type": "text"
      },
      {
        "id": "fullName",
        "label": "Full Name",
        "type": "text"
      },
      {
        "id": "id",
        "label": "ID",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      },
      {
        "id": "superannuationResignationRetirementDeathAsApplicable",
        "label": "Superannuation / Resignation / Retirement / Death, as applicable",
        "type": "textarea"
      },
      {
        "id": "yearsAndMonths",
        "label": "Years and Months",
        "type": "text"
      },
      {
        "id": "amount",
        "label": "₹ Amount",
        "type": "text"
      },
      {
        "id": "amountAsPerCalculationUnderSection4",
        "label": "₹ Amount, as per calculation under Section 4",
        "type": "text"
      },
      {
        "id": "bankTransferChequeWithBankDetails",
        "label": "Bank transfer / Cheque, with bank details",
        "type": "text"
      },
      {
        "id": "date3",
        "label": "Date (3)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application for Payment of Gratuity — Form I</h2>\n<p class=\"sub-center\">Under Rule 7(1), Payment of Gratuity (Central) Rules, 1972</p>\n\n<p>To,<br>The Employer,<br><span class=\"filled\">{{companyEstablishmentNameAndAddress}}</span></p>\n\n<table class=\"field-table\">\n<tr><th>Name of Applicant</th><td><span class=\"filled\">{{fullName}}</span></td></tr>\n<tr><th>Employee ID / Token No.</th><td><span class=\"filled\">{{id}}</span></td></tr>\n<tr><th>Date of Appointment</th><td><span class=\"filled\">{{date}}</span></td></tr>\n<tr><th>Date of Termination of Service</th><td><span class=\"filled\">{{date2}}</span></td></tr>\n<tr><th>Reason for Termination</th><td><span class=\"filled\">{{superannuationResignationRetirementDeathAsApplicable}}</span></td></tr>\n<tr><th>Total Period of Service</th><td><span class=\"filled\">{{yearsAndMonths}}</span></td></tr>\n<tr><th>Last Drawn Basic Wages + DA</th><td><span class=\"filled\">{{amount}}</span></td></tr>\n<tr><th>Amount of Gratuity Claimed</th><td><span class=\"filled\">{{amountAsPerCalculationUnderSection4}}</span></td></tr>\n<tr><th>Mode of Payment Preferred</th><td><span class=\"filled\">{{bankTransferChequeWithBankDetails}}</span></td></tr>\n</table>\n\n<p>I hereby apply for payment of gratuity due to me under the Payment of Gratuity Act, 1972 in respect of the above employment.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Applicant<br>Date: <span class=\"filled\">{{date3}}</span></div></div>\n</div>\n\n<div class=\"note-box\">Under Section 7 of the Act, the application should generally be made within 30 days of the gratuity becoming payable; employers cannot reject a claim solely for delay if there is sufficient cause. The employer must then determine and pay the gratuity within 30 days of it becoming due.</div>\n",
    "price": 49
  },
  {
    "slug": "industrial-disputes-complaint",
    "title": "Complaint under the Industrial Disputes Act",
    "act": "Industrial Disputes Act, 1947",
    "shelf": "Labour & Employment Law",
    "docType": "Complaint",
    "fields": [
      {
        "id": "jurisdictionDistrict",
        "label": "Jurisdiction / District",
        "type": "text"
      },
      {
        "id": "fullNameOfWorkman",
        "label": "Full Name of Workman",
        "type": "text"
      },
      {
        "id": "employerEstablishmentName",
        "label": "Employer/Establishment Name",
        "type": "text"
      },
      {
        "id": "designation",
        "label": "Designation",
        "type": "text"
      },
      {
        "id": "dateOfJoining",
        "label": "Date of Joining",
        "type": "text"
      },
      {
        "id": "dateOfTerminationPresentIfStillEmployed",
        "label": "Date of Termination / Present, if still employed",
        "type": "text"
      },
      {
        "id": "monthlyWages",
        "label": "Monthly Wages",
        "type": "text"
      },
      {
        "id": "natureOfDisputeEGWrongfulTerminationNonPaymentOfWagesDenialOfStatutoryBenefits",
        "label": "Nature of dispute — e.g. wrongful termination / non-payment of wages / denial of statutory benefits",
        "type": "textarea"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "detailedNarrativeOfFactsGivingRiseToTheDispute",
        "label": "Detailed narrative of facts giving rise to the dispute",
        "type": "textarea"
      },
      {
        "id": "stateTheSpecificReliefSoughtEGReinstatementWithBackWagesPaymentOfOutstandingDuesOfRsCompensation",
        "label": "State the specific relief sought — e.g. reinstatement with back wages / payment of outstanding dues of Rs. ___ / compensation",
        "type": "textarea"
      },
      {
        "id": "date2",
        "label": "Date (2)",
        "type": "text"
      }
    ],
    "template": "\n<h2>Complaint / Application before the Labour Commissioner</h2>\n<p class=\"sub-center\">Under the Industrial Disputes Act, 1947</p>\n\n<p>To,<br>The Labour Commissioner / Conciliation Officer,<br><span class=\"filled\">{{jurisdictionDistrict}}</span></p>\n\n<p><strong><span class=\"filled\">{{fullNameOfWorkman}}</span></strong> ... Complainant/Workman<br>\n<strong>VERSUS</strong><br>\n<strong><span class=\"filled\">{{employerEstablishmentName}}</span></strong> ... Employer</p>\n\n<p>Sir/Madam,</p>\n\n<ol class=\"clauses\">\n<li>That the Complainant was employed with the Employer as <span class=\"filled\">{{designation}}</span> from <span class=\"filled\">{{dateOfJoining}}</span> till <span class=\"filled\">{{dateOfTerminationPresentIfStillEmployed}}</span>, drawing wages of ₹<span class=\"filled\">{{monthlyWages}}</span> per month.</li>\n<li>That the dispute concerns: <span class=\"filled\">{{natureOfDisputeEGWrongfulTerminationNonPaymentOfWagesDenialOfStatutoryBenefits}}</span>, which arose on <span class=\"filled\">{{date}}</span>.</li>\n<li>That the relevant facts are as follows: <span class=\"filled\">{{detailedNarrativeOfFactsGivingRiseToTheDispute}}</span>.</li>\n<li>That the Complainant has attempted to resolve this matter directly with the Employer, without success.</li>\n</ol>\n\n<p><strong>Relief Sought:</strong></p>\n<p><span class=\"filled\">{{stateTheSpecificReliefSoughtEGReinstatementWithBackWagesPaymentOfOutstandingDuesOfRsCompensation}}</span>.</p>\n\n<p>I request that conciliation proceedings be initiated in this matter under Section 12 of the Industrial Disputes Act, 1947, and that appropriate action be taken.</p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Complainant / Workman<br>Date: <span class=\"filled\">{{date2}}</span></div></div>\n</div>\n\n<div class=\"note-box\">If conciliation fails, the dispute may be referred by the appropriate government to a Labour Court/Industrial Tribunal for adjudication under Section 10 of the Act.</div>\n",
    "price": 149
  },
  {
    "slug": "rti-application-form",
    "title": "RTI Application Form",
    "act": "Right to Information Act, 2005",
    "shelf": "Tax, RTI & Government Forms",
    "docType": "Application",
    "fields": [
      {
        "id": "nameOfPublicAuthorityDepartment",
        "label": "Name of Public Authority / Department",
        "type": "text"
      },
      {
        "id": "fullName",
        "label": "Full Name",
        "type": "text"
      },
      {
        "id": "completePostalAddress",
        "label": "Complete Postal Address",
        "type": "text"
      },
      {
        "id": "contactDetails",
        "label": "Contact Details",
        "type": "text"
      },
      {
        "id": "specificQuestion1BePreciseAndSpecificAboutTheInformationSought",
        "label": "Specific question 1 — be precise and specific about the information sought",
        "type": "textarea"
      },
      {
        "id": "specificQuestion2IfAny",
        "label": "Specific question 2, if any",
        "type": "text"
      },
      {
        "id": "specificQuestion3IfAny",
        "label": "Specific question 3, if any",
        "type": "text"
      },
      {
        "id": "fromToDates",
        "label": "From — To dates",
        "type": "text"
      },
      {
        "id": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "id": "place",
        "label": "Place",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application under the Right to Information Act, 2005</h2>\n\n<p>To,<br>The Public Information Officer,<br><span class=\"filled\">{{nameOfPublicAuthorityDepartment}}</span></p>\n\n<table class=\"field-table\">\n<tr><th>Applicant's Name</th><td><span class=\"filled\">{{fullName}}</span></td></tr>\n<tr><th>Address</th><td><span class=\"filled\">{{completePostalAddress}}</span></td></tr>\n<tr><th>Phone / Email</th><td><span class=\"filled\">{{contactDetails}}</span></td></tr>\n<tr><th>Citizenship</th><td>Indian</td></tr>\n</table>\n\n<p><strong>Subject: Request for information under Section 6(1) of the Right to Information Act, 2005</strong></p>\n\n<p>Sir/Madam,</p>\n\n<p>I would like to seek the following information under the Right to Information Act, 2005:</p>\n\n<ol class=\"clauses\">\n<li><span class=\"filled\">{{specificQuestion1BePreciseAndSpecificAboutTheInformationSought}}</span></li>\n<li><span class=\"filled\">{{specificQuestion2IfAny}}</span></li>\n<li><span class=\"filled\">{{specificQuestion3IfAny}}</span></li>\n<li>Please provide certified copies of relevant documents, if available, in support of the above.</li>\n</ol>\n\n<p>I am enclosing the prescribed application fee of ₹10 (or proof of exemption, e.g. BPL category, if applicable).</p>\n\n<p>Period for which information is sought (if applicable): <span class=\"filled\">{{fromToDates}}</span></p>\n\n<div class=\"signature-block\" style=\"justify-content:flex-end;\">\n  <div class=\"sig-col\" style=\"text-align:right;\"><div class=\"sig-line\">Signature of Applicant<br>Date: <span class=\"filled\">{{date}}</span><br>Place: <span class=\"filled\">{{place}}</span></div></div>\n</div>\n\n<div class=\"note-box\">Applications can be filed online at rtionline.gov.in for central government authorities, or on plain paper/prescribed form addressed to the PIO for state authorities. A response is due within 30 days (48 hours for matters concerning life or liberty), extended to 35 days if routed through an Assistant PIO.</div>\n",
    "price": 49
  },
  {
    "slug": "pan-application-form",
    "title": "PAN Application (Form 49A / 49AA)",
    "act": "Income Tax Act, 1961",
    "shelf": "Tax, RTI & Government Forms",
    "docType": "Government Form — Field Reference",
    "fields": [
      {
        "id": "asPerProofOfIdentity",
        "label": "As per proof of identity",
        "type": "text"
      },
      {
        "id": "dobDoi",
        "label": "DOB / DOI",
        "type": "text"
      },
      {
        "id": "name",
        "label": "Name",
        "type": "text"
      },
      {
        "id": "completeAddressWithPin",
        "label": "Complete Address with PIN",
        "type": "text"
      },
      {
        "id": "individualHufCompanyFirmTrustEtc",
        "label": "Individual / HUF / Company / Firm / Trust, etc.",
        "type": "text"
      },
      {
        "id": "eGAadhaarPassportVoterId",
        "label": "e.g. Aadhaar, Passport, Voter ID",
        "type": "text"
      },
      {
        "id": "eGAadhaarUtilityBillPassport",
        "label": "e.g. Aadhaar, Utility Bill, Passport",
        "type": "text"
      },
      {
        "id": "eGBirthCertificatePassportMatriculationCertificate",
        "label": "e.g. Birth Certificate, Passport, Matriculation Certificate",
        "type": "textarea"
      },
      {
        "id": "salaryBusinessOtherAsApplicable",
        "label": "Salary / Business / Other, as applicable",
        "type": "text"
      }
    ],
    "template": "\n<h2>Application for PAN — Form 49A / 49AA</h2>\n<p class=\"sub-center\">Form 49A: Indian citizens · Form 49AA: Foreign citizens/entities</p>\n\n<table class=\"field-table\">\n<tr><th>Full Name</th><td><span class=\"filled\">{{asPerProofOfIdentity}}</span></td></tr>\n<tr><th>Date of Birth / Incorporation</th><td><span class=\"filled\">{{dobDoi}}</span></td></tr>\n<tr><th>Father's Name (individuals)</th><td><span class=\"filled\">{{name}}</span></td></tr>\n<tr><th>Address for Communication</th><td><span class=\"filled\">{{completeAddressWithPin}}</span></td></tr>\n<tr><th>Status of Applicant</th><td><span class=\"filled\">{{individualHufCompanyFirmTrustEtc}}</span></td></tr>\n<tr><th>Proof of Identity</th><td><span class=\"filled\">{{eGAadhaarPassportVoterId}}</span></td></tr>\n<tr><th>Proof of Address</th><td><span class=\"filled\">{{eGAadhaarUtilityBillPassport}}</span></td></tr>\n<tr><th>Proof of Date of Birth</th><td><span class=\"filled\">{{eGBirthCertificatePassportMatriculationCertificate}}</span></td></tr>\n<tr><th>Source of Income</th><td><span class=\"filled\">{{salaryBusinessOtherAsApplicable}}</span></td></tr>\n</table>\n\n<p><strong>Documents to attach:</strong></p>\n<ol class=\"clauses\">\n<li>One recent passport-size photograph (for individual applicants)</li>\n<li>Self-attested copies of identity, address and date-of-birth proof as per the notified list</li>\n<li>Applicable fee (differs for Indian and foreign communication addresses)</li>\n</ol>\n\n<div class=\"note-box\">Applications are filed online via the Protean (formerly NSDL) or UTIITSL portals, both authorised by the Income Tax Department, followed by either e-KYC/e-Sign or physical document submission depending on the mode chosen.</div>\n",
    "price": 29
  },
  {
    "slug": "gst-registration-form",
    "title": "GST Registration (Form REG-01)",
    "act": "Central Goods and Services Tax Act, 2017",
    "shelf": "Tax, RTI & Government Forms",
    "docType": "Government Form — Field Reference",
    "fields": [
      {
        "id": "asPerPan",
        "label": "As per PAN",
        "type": "text"
      },
      {
        "id": "pan",
        "label": "PAN",
        "type": "text"
      },
      {
        "id": "tradeName",
        "label": "Trade Name",
        "type": "text"
      },
      {
        "id": "proprietorshipPartnershipCompanyLlpEtc",
        "label": "Proprietorship / Partnership / Company / LLP, etc.",
        "type": "text"
      },
      {
        "id": "completeAddressWithProof",
        "label": "Complete Address with proof",
        "type": "text"
      },
      {
        "id": "addressEsIfAny",
        "label": "Address(es), if any",
        "type": "text"
      },
      {
        "id": "namePanAadhaarContact",
        "label": "Name, PAN, Aadhaar, Contact",
        "type": "text"
      },
      {
        "id": "accountNumberIfsc",
        "label": "Account Number, IFSC",
        "type": "text"
      },
      {
        "id": "listMajorHsnSacCodes",
        "label": "List major HSN/SAC codes",
        "type": "textarea"
      }
    ],
    "template": "\n<h2>Application for GST Registration — Form GST REG-01</h2>\n\n<table class=\"field-table\">\n<tr><th>Legal Name of Business</th><td><span class=\"filled\">{{asPerPan}}</span></td></tr>\n<tr><th>PAN of Business/Proprietor</th><td><span class=\"filled\">{{pan}}</span></td></tr>\n<tr><th>Trade Name (if different)</th><td><span class=\"filled\">{{tradeName}}</span></td></tr>\n<tr><th>Constitution of Business</th><td><span class=\"filled\">{{proprietorshipPartnershipCompanyLlpEtc}}</span></td></tr>\n<tr><th>Principal Place of Business</th><td><span class=\"filled\">{{completeAddressWithProof}}</span></td></tr>\n<tr><th>Additional Places of Business</th><td><span class=\"filled\">{{addressEsIfAny}}</span></td></tr>\n<tr><th>Details of Authorised Signatory</th><td><span class=\"filled\">{{namePanAadhaarContact}}</span></td></tr>\n<tr><th>Bank Account Details</th><td><span class=\"filled\">{{accountNumberIfsc}}</span></td></tr>\n<tr><th>Goods/Services Dealt In (HSN/SAC)</th><td><span class=\"filled\">{{listMajorHsnSacCodes}}</span></td></tr>\n</table>\n\n<p><strong>Documents typically required:</strong></p>\n<ol class=\"clauses\">\n<li>PAN card of the business/proprietor</li>\n<li>Proof of principal place of business (ownership document / rent agreement + NOC)</li>\n<li>Bank account statement or cancelled cheque</li>\n<li>Identity and address proof of authorised signatory</li>\n<li>Constitution document (Partnership Deed / Certificate of Incorporation, as applicable)</li>\n</ol>\n\n<div class=\"note-box\">Filed online at gst.gov.in, with Aadhaar authentication of the primary authorised signatory (recommended, for faster approval). GSTIN is generally issued within 7 working days if the application and documents are in order.</div>\n",
    "price": 49
  },
  {
    "slug": "itr-filing",
    "title": "Income Tax Return (ITR) Filing",
    "act": "Income Tax Act, 1961",
    "shelf": "Tax, RTI & Government Forms",
    "docType": "Government Filing — Field Reference",
    "fields": [
      {
        "id": "details",
        "label": "Details",
        "type": "text"
      },
      {
        "id": "itr1SalaryOneHousePropertyItr2Itr3Itr4PresumptiveEtc",
        "label": "ITR-1 (Salary/one house property) / ITR-2 / ITR-3 / ITR-4 (presumptive) etc.",
        "type": "textarea"
      },
      {
        "id": "fromEmployerIfSalaried",
        "label": "From employer, if salaried",
        "type": "text"
      },
      {
        "id": "downloadedFromTheEFilingPortalShowsTdsTcsAndOtherReportedIncome",
        "label": "Downloaded from the e-Filing portal — shows TDS, TCS and other reported income",
        "type": "textarea"
      },
      {
        "id": "allAccountsHeldDuringTheYearWithOneNominatedForRefund",
        "label": "All accounts held during the year, with one nominated for refund",
        "type": "textarea"
      },
      {
        "id": "80c80d80gHomeLoanInterestEtc",
        "label": "80C, 80D, 80G, home loan interest, etc.",
        "type": "text"
      },
      {
        "id": "fromBrokerMutualFundIfApplicable",
        "label": "From broker/mutual fund, if applicable",
        "type": "text"
      }
    ],
    "template": "\n<h2>Income Tax Return — Filing Checklist</h2>\n<p class=\"sub-center\">Filed online at the Income Tax e-Filing Portal</p>\n\n<div class=\"note-box\">ITR filing is done entirely online at incometax.gov.in and the applicable form (ITR-1 through ITR-7) depends on your sources of income and entity type. This page is a preparation checklist, not a fillable form.</div>\n\n<table class=\"field-table\">\n<tr><th>PAN & Aadhaar (linked)</th><td><span class=\"filled\">{{details}}</span></td></tr>\n<tr><th>Applicable ITR Form</th><td><span class=\"filled\">{{itr1SalaryOneHousePropertyItr2Itr3Itr4PresumptiveEtc}}</span></td></tr>\n<tr><th>Form 16 (Salary Income)</th><td><span class=\"filled\">{{fromEmployerIfSalaried}}</span></td></tr>\n<tr><th>Form 26AS / AIS / TIS</th><td><span class=\"filled\">{{downloadedFromTheEFilingPortalShowsTdsTcsAndOtherReportedIncome}}</span></td></tr>\n<tr><th>Bank Account Details</th><td><span class=\"filled\">{{allAccountsHeldDuringTheYearWithOneNominatedForRefund}}</span></td></tr>\n<tr><th>Investment/Deduction Proofs</th><td><span class=\"filled\">{{80c80d80gHomeLoanInterestEtc}}</span></td></tr>\n<tr><th>Capital Gains Statements</th><td><span class=\"filled\">{{fromBrokerMutualFundIfApplicable}}</span></td></tr>\n</table>\n\n<p><strong>Steps:</strong></p>\n<ol class=\"clauses\">\n<li>Log in to the e-Filing portal with PAN and reconcile Form 26AS/AIS with your own income records</li>\n<li>Select the correct ITR form based on your income sources</li>\n<li>Fill in income, deduction and tax-paid details; the portal auto-computes tax payable/refundable</li>\n<li>Verify the return electronically (Aadhaar OTP/net-banking/DSC) within the prescribed time to complete the filing</li>\n</ol>\n\n<div class=\"note-box\">Due dates and applicable forms are notified/updated by the CBDT each assessment year — confirm the current due date and form before filing.</div>\n",
    "price": 49
  },
  {
    "slug": "passport-application",
    "title": "Passport Application",
    "act": "Passports Act, 1967",
    "shelf": "Tax, RTI & Government Forms",
    "docType": "Government Form — Field Reference",
    "fields": [
      {
        "id": "freshReissueRenewalChangeOfDetails",
        "label": "Fresh / Reissue / Renewal / Change of details",
        "type": "text"
      },
      {
        "id": "asPerProofOfIdentity",
        "label": "As per proof of identity",
        "type": "text"
      },
      {
        "id": "details",
        "label": "Details",
        "type": "text"
      },
      {
        "id": "withProof",
        "label": "With proof",
        "type": "text"
      },
      {
        "id": "36Page60Page",
        "label": "36-page / 60-page",
        "type": "text"
      },
      {
        "id": "normalTatkaal",
        "label": "Normal / Tatkaal",
        "type": "text"
      },
      {
        "id": "birthCertificate10thCertificatePanEtcAsPerNotifiedList",
        "label": "Birth Certificate / 10th Certificate / PAN, etc., as per notified list",
        "type": "textarea"
      },
      {
        "id": "aadhaarUtilityBillBankStatementEtc",
        "label": "Aadhaar / Utility Bill / Bank Statement, etc.",
        "type": "text"
      },
      {
        "id": "nameRelationshipAddressPhone",
        "label": "Name, Relationship, Address, Phone",
        "type": "text"
      }
    ],
    "template": "\n<h2>Passport Application — Field Reference</h2>\n<p class=\"sub-center\">Filed online via Passport Seva (passportindia.gov.in)</p>\n\n<table class=\"field-table\">\n<tr><th>Type of Application</th><td><span class=\"filled\">{{freshReissueRenewalChangeOfDetails}}</span></td></tr>\n<tr><th>Full Name</th><td><span class=\"filled\">{{asPerProofOfIdentity}}</span></td></tr>\n<tr><th>Date & Place of Birth</th><td><span class=\"filled\">{{details}}</span></td></tr>\n<tr><th>Present & Permanent Address</th><td><span class=\"filled\">{{withProof}}</span></td></tr>\n<tr><th>Type of Passport Booklet</th><td><span class=\"filled\">{{36Page60Page}}</span></td></tr>\n<tr><th>Scheme</th><td><span class=\"filled\">{{normalTatkaal}}</span></td></tr>\n<tr><th>Proof of Date of Birth</th><td><span class=\"filled\">{{birthCertificate10thCertificatePanEtcAsPerNotifiedList}}</span></td></tr>\n<tr><th>Proof of Address</th><td><span class=\"filled\">{{aadhaarUtilityBillBankStatementEtc}}</span></td></tr>\n<tr><th>Emergency Contact Details</th><td><span class=\"filled\">{{nameRelationshipAddressPhone}}</span></td></tr>\n</table>\n\n<p><strong>Process:</strong></p>\n<ol class=\"clauses\">\n<li>Register and fill the online application form on the Passport Seva portal</li>\n<li>Pay the applicable fee online and book an appointment at the nearest Passport Seva Kendra (PSK) / Post Office PSK</li>\n<li>Visit the PSK with originals and self-attested photocopies of all documents for verification</li>\n<li>Police verification is conducted (pre- or post-issuance, depending on category), after which the passport is dispatched</li>\n</ol>\n\n<div class=\"note-box\">Document requirements differ slightly for minors, name-change cases and Tatkaal applications — check the current annexure list on the Passport Seva portal for your specific category before your appointment.</div>\n",
    "price": 59
  }
];