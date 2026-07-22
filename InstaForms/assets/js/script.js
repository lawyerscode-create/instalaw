const DATA = [
  {
    shelf: "Property & Real Estate Law",
    sub: "conveyancing, tenancy & transfer of title",
    forms: [
      {
        title: "Sale Deed",
        act: "Transfer of Property Act, 1882 · Registration Act, 1908",
        desc: "The primary document that legally transfers ownership of immovable property from seller to buyer, executed on stamp paper and compulsorily registered at the Sub-Registrar's office.",
        checklist: ["Title documents & prior chain of ownership","Encumbrance Certificate","Property tax receipts / khata","PAN & ID proof of both parties","Sale consideration & stamp duty payable"],
        link: "form-fill.html?form=sale-deed",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Rent / Lease Agreement",
        act: "Transfer of Property Act, 1882 · State Rent Control / Model Tenancy Act",
        desc: "Sets out the terms between landlord and tenant — rent, deposit, notice period and maintenance — and is typically notarised or registered depending on the tenure and state.",
        checklist: ["ID & address proof of landlord and tenant","Property address & description","Agreed rent, deposit and lock-in period","State-specific stamp paper value"],
        link: "form-fill.html?form=rent-lease-agreement",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Gift Deed",
        act: "Transfer of Property Act, 1882, Section 122",
        desc: "Used to voluntarily transfer property to a family member or third party without consideration; must be registered to be valid.",
        checklist: ["Original title deed of the donor","Relationship proof (for concessional stamp duty)","ID proof of donor and donee","Two witnesses for execution"],
        link: "form-fill.html?form=gift-deed",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "General / Special Power of Attorney (Property)",
        act: "Powers of Attorney Act, 1882",
        desc: "Authorises an agent to manage, sell, lease or represent the owner in matters concerning a specific property.",
        checklist: ["Property details the POA covers","Scope of powers being granted","ID proof of principal and agent","Notarisation, and registration if used to transfer immovable property"],
        link: "form-fill.html?form=power-of-attorney-property",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Mutation Application (Dakhil-Kharij)",
        act: "State Land Revenue Rules",
        desc: "Filed with the local revenue/municipal office to update land records after a sale, gift or inheritance, so property tax is billed to the new owner.",
        checklist: ["Registered sale/gift deed copy","Latest property tax receipt","Death certificate & legal heir proof (if inheritance)","Application in prescribed local format"],
        link: "form-fill.html?form=mutation-application",
        source: "National Portal of India — Government Forms"
      }
    ]
  },
  {
    shelf: "Family Law",
    sub: "marriage, maintenance & succession",
    forms: [
      {
        title: "Application for Registration of Marriage",
        act: "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
        desc: "Formal registration of a marriage with the local Marriage Registrar, producing a certificate used for passports, visas and legal proof of marital status.",
        checklist: ["Age & address proof of both spouses","Marriage invitation card or priest certificate","Passport-size photographs","Two witnesses with ID proof"],
        link: "form-fill.html?form=marriage-registration-application",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Petition for Mutual Consent Divorce",
        act: "Hindu Marriage Act, 1955, Section 13B",
        desc: "Filed jointly by both spouses in Family Court seeking dissolution of marriage by mutual agreement, followed by a statutory cooling-off period.",
        checklist: ["Marriage certificate","Proof of separation period","Settlement terms on alimony & custody","Joint affidavit of both parties"],
        link: "form-fill.html?form=mutual-consent-divorce-petition",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Application for Maintenance",
        act: "Section 144, Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly S.125 CrPC)",
        desc: "Filed by a spouse, child or parent seeking monthly maintenance from a person legally bound to support them.",
        checklist: ["Proof of relationship (marriage/birth certificate)","Income details of both parties, if known","Reason maintenance is being sought","Address for service of notice"],
        link: "form-fill.html?form=maintenance-application",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Will / Testament",
        act: "Indian Succession Act, 1925",
        desc: "A signed declaration of how a person's assets should be distributed after death; registration is optional but recommended.",
        checklist: ["List of assets and beneficiaries","Executor's name and consent","Two attesting witnesses","Testator's signature on every page"],
        link: "form-fill.html?form=will-testament",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Adoption Deed",
        act: "Hindu Adoption and Maintenance Act, 1956 / Juvenile Justice Act, 2015",
        desc: "Records the legal adoption of a child, transferring parental rights and responsibilities to the adoptive parents.",
        checklist: ["Consent of biological parents / guardian","Adoptive parents' eligibility documents","Child's birth certificate","Registration with CARA, where applicable"],
        link: "form-fill.html?form=adoption-deed",
        source: "Central Adoption Resource Authority (CARA)"
      }
    ]
  },
  {
    shelf: "Criminal Law",
    sub: "complaints, bail & representation",
    forms: [
      {
        title: "First Information Report (FIR) Format",
        act: "Section 173, Bharatiya Nagarik Suraksha Sanhita, 2023",
        desc: "The written record a police station prepares on receiving information about a cognisable offence — the starting point of a criminal investigation.",
        checklist: ["Date, time and place of the incident","Description of what happened, in sequence","Names/description of persons involved","Informant's ID and contact details"],
        link: "form-fill.html?form=fir-format",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Regular Bail Application",
        act: "Sections 478–483, Bharatiya Nagarik Suraksha Sanhita, 2023",
        desc: "Filed by or on behalf of an arrested person seeking release from custody pending trial.",
        checklist: ["FIR / case number","Grounds for bail","Surety details","Vakalatnama for the advocate on record"],
        link: "form-fill.html?form=regular-bail-application",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Anticipatory Bail Application",
        act: "Section 482, Bharatiya Nagarik Suraksha Sanhita, 2023",
        desc: "Filed before arrest by a person apprehending arrest in a non-bailable offence, seeking a direction that they be released on bail if arrested.",
        checklist: ["Basis for apprehension of arrest","Copy of FIR, if registered","Antecedents / prior criminal record disclosure","Advocate's Vakalatnama"],
        link: "form-fill.html?form=anticipatory-bail",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Private Criminal Complaint",
        act: "Section 223, Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly S.200 CrPC)",
        desc: "Filed directly before a Magistrate by a complainant when the police decline to register an FIR, or for offences triable on complaint.",
        checklist: ["Facts constituting the offence","List of witnesses and evidence","Complainant's sworn affidavit","Court fee as applicable"],
        link: "form-fill.html?form=private-criminal-complaint",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Vakalatnama",
        act: "Advocates Act, 1961",
        desc: "The document by which a client authorises an advocate to appear and act on their behalf in a court proceeding.",
        checklist: ["Case / FIR number and court name","Client's signature and ID","Advocate's enrolment details","Court fee stamp, where required"],
        link: "form-fill.html?form=vakalatnama",
        source: "eCourts Services — Government of India"
      }
    ]
  },
  {
    shelf: "Civil & Contract Law",
    sub: "suits, notices & agreements",
    forms: [
      {
        title: "Plaint (Civil Suit)",
        act: "Order VII, Code of Civil Procedure, 1908",
        desc: "The formal pleading that institutes a civil suit, stating the facts, cause of action and relief sought from the court.",
        checklist: ["Cause of action and dates","Parties' full names and addresses","Relief claimed and valuation of suit","Court fee as per suit value"],
        link: "form-fill.html?form=plaint-civil-suit",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Written Statement",
        act: "Order VIII, Code of Civil Procedure, 1908",
        desc: "The defendant's formal reply to a plaint, admitting, denying or explaining each allegation and raising any defences.",
        checklist: ["Copy of the plaint served","Point-by-point response to each paragraph","Any counter-claim or set-off","Supporting documents list"],
        link: "form-fill.html?form=written-statement",
        source: "eCourts Services — Government of India"
      },
      {
        title: "Legal Notice",
        act: "Section 80, Code of Civil Procedure, 1908 (where applicable) / general practice",
        desc: "A formal written warning sent before litigation, giving the other party a defined period to remedy a grievance or breach.",
        checklist: ["Facts of the dispute","Specific demand and timeline to comply","Sender and recipient's full addresses","Advocate's signature, if sent through counsel"],
        link: "form-fill.html?form=legal-notice",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "General Affidavit",
        act: "Order XIX, Code of Civil Procedure, 1908 / Indian Evidence framework",
        desc: "A sworn written statement of fact, used to support applications, verify pleadings or make declarations before authorities.",
        checklist: ["Facts being deponed to, numbered clearly","Deponent's ID proof","Notarisation or oath commissioner's attestation","Appropriate stamp paper, if required"],
        link: "form-fill.html?form=general-affidavit",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Partnership Deed",
        act: "Indian Partnership Act, 1932",
        desc: "Records the terms agreed between partners of a firm — capital contribution, profit sharing and roles — and forms the basis for firm registration.",
        checklist: ["Names & addresses of all partners","Capital contribution of each partner","Profit/loss sharing ratio","Business activity and firm name"],
        link: "form-fill.html?form=partnership-deed",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      }
    ]
  },
  {
    shelf: "Corporate & Business Law",
    sub: "incorporation, agreements & compliance",
    forms: [
      {
        title: "SPICe+ (Company Incorporation)",
        act: "Companies Act, 2013",
        desc: "The integrated web form for incorporating a company in India, bundling name reservation, incorporation, PAN, TAN and other registrations into one filing.",
        checklist: ["Proposed company name options","Registered office proof","Director & shareholder ID/address proof","Draft MOA and AOA"],
        link: "form-fill.html?form=spice-plus-incorporation",
        source: "Ministry of Corporate Affairs (MCA) Portal"
      },
      {
        title: "Memorandum & Articles of Association (MOA/AOA)",
        act: "Companies Act, 2013, Sections 4 & 5",
        desc: "The MOA defines a company's objects and scope of operation; the AOA lays down its internal rules and governance.",
        checklist: ["Company's object clause","Authorised share capital","Rules for board meetings & voting","Subscriber details"],
        link: "form-fill.html?form=moa-aoa",
        source: "Ministry of Corporate Affairs (MCA) Portal"
      },
      {
        title: "Partnership Firm Registration Form",
        act: "Indian Partnership Act, 1932, Section 58",
        desc: "Filed with the Registrar of Firms to formally register a partnership, which strengthens the firm's ability to enforce contracts in court.",
        checklist: ["Executed partnership deed","Firm name and principal place of business","Duration of the firm","ID proof of all partners"],
        link: "form-fill.html?form=partnership-firm-registration",
        source: "National Portal of India — Government Forms"
      },
      {
        title: "Non-Disclosure Agreement (NDA)",
        act: "Indian Contract Act, 1872",
        desc: "A contract binding one or both parties to keep specified information confidential, commonly used before sharing business or technical information.",
        checklist: ["Definition of confidential information","Duration of confidentiality obligation","Permitted disclosures / exceptions","Governing law and jurisdiction clause"],
        link: "form-fill.html?form=nda",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "Employment Appointment Letter",
        act: "Indian Contract Act, 1872 / applicable Shops & Establishments Act",
        desc: "The formal offer confirming a candidate's employment terms — role, compensation, probation and notice period.",
        checklist: ["Designation and reporting structure","Compensation and benefits breakup","Probation period and confirmation criteria","Notice period and termination clause"],
        link: "form-fill.html?form=employment-appointment-letter",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      }
    ]
  },
  {
    shelf: "Consumer Protection Law",
    sub: "complaints & redressal",
    forms: [
      {
        title: "Consumer Complaint (E-Daakhil)",
        act: "Consumer Protection Act, 2019",
        desc: "Filed before a District, State or National Consumer Disputes Redressal Commission against deficient goods or services, now largely e-filed via the E-Daakhil portal.",
        checklist: ["Proof of purchase / service (bill, invoice)","Details of the deficiency or unfair trade practice","Relief sought (refund, replacement, compensation)","Prior notice sent to the opposite party, if any"],
        link: "form-fill.html?form=consumer-complaint-edaakhil",
        source: "E-Daakhil — National Consumer Disputes Redressal Commission"
      },
      {
        title: "Legal Notice to Opposite Party (Consumer)",
        act: "Consumer Protection Act, 2019",
        desc: "A pre-complaint notice giving a trader or service provider a chance to resolve the grievance before a formal complaint is filed.",
        checklist: ["Transaction details and date","Nature of deficiency in goods/service","Specific remedy demanded","Reasonable timeline to respond"],
        link: "form-fill.html?form=legal-notice-consumer",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "RTI Application (for public-service grievances)",
        act: "Right to Information Act, 2005",
        desc: "Used to formally request information from a public authority — often paired with consumer complaints involving government service providers.",
        checklist: ["Name of the public authority","Specific information sought","Applicant's address for reply","RTI fee (₹10, with exemptions for BPL applicants)"],
        link: "form-fill.html?form=rti-application-form",
        source: "RTI Online — Government of India"
      }
    ]
  },
  {
    shelf: "Labour & Employment Law",
    sub: "service, wages & retirement benefits",
    forms: [
      {
        title: "Termination / Relieving Letter",
        act: "Industrial Disputes Act, 1947 / Shops & Establishments Act",
        desc: "Formally ends the employment relationship, recording the last working day and settlement of dues.",
        checklist: ["Reason for termination or resignation","Notice period served or pay-in-lieu","Full & final settlement details","Return of company property acknowledgement"],
        link: "form-fill.html?form=termination-relieving-letter",
        source: "General drafts hub — LegalServiceIndia Forms Library"
      },
      {
        title: "EPF Withdrawal (Composite Claim Form 19/31)",
        act: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
        desc: "Used to withdraw or partially claim funds from an employee's EPF account after leaving employment or for specified needs.",
        checklist: ["UAN (Universal Account Number)","Linked Aadhaar & bank account","Reason for withdrawal","KYC verification on the EPFO portal"],
        link: "form-fill.html?form=epf-withdrawal-form",
        source: "Employees' Provident Fund Organisation (EPFO)"
      },
      {
        title: "Gratuity Application (Form I)",
        act: "Payment of Gratuity Act, 1972",
        desc: "Filed by an employee (or nominee) to claim gratuity payable after completing five years of continuous service.",
        checklist: ["Proof of length of service","Last drawn salary details","Date of leaving employment","Employer acknowledgement"],
        link: "form-fill.html?form=gratuity-application",
        source: "Ministry of Labour & Employment, Government of India"
      },
      {
        title: "Complaint under the Industrial Disputes Act",
        act: "Industrial Disputes Act, 1947",
        desc: "Filed before the Labour Commissioner or Industrial Tribunal to raise a dispute over wrongful termination, wages or working conditions.",
        checklist: ["Nature of the industrial dispute","Employer and workman details","Attempts at conciliation, if any","Relief sought"],
        link: "form-fill.html?form=industrial-disputes-complaint",
        source: "Ministry of Labour & Employment, Government of India"
      }
    ]
  },
  {
    shelf: "Tax, RTI & Government Forms",
    sub: "identity, filings & disclosures",
    forms: [
      {
        title: "RTI Application Form",
        act: "Right to Information Act, 2005",
        desc: "Lets any citizen request information held by a public authority, filed online or on plain paper with the prescribed fee.",
        checklist: ["Name of public authority concerned","Clear, specific information sought","Applicant's postal address","Application fee of ₹10"],
        link: "form-fill.html?form=rti-application-form",
        source: "RTI Online — Government of India"
      },
      {
        title: "PAN Application (Form 49A / 49AA)",
        act: "Income Tax Act, 1961",
        desc: "Form 49A is for resident Indian applicants and 49AA for foreign nationals/entities applying for a Permanent Account Number.",
        checklist: ["Proof of identity","Proof of address","Proof of date of birth","Passport-size photograph"],
        link: "form-fill.html?form=pan-application-form",
        source: "Protean (formerly NSDL) — TIN Facilitation for Income Tax Dept."
      },
      {
        title: "GST Registration (Form REG-01)",
        act: "Central Goods and Services Tax Act, 2017",
        desc: "Filed by a business exceeding the prescribed turnover threshold, or otherwise liable, to register under the GST regime.",
        checklist: ["PAN of the business/proprietor","Proof of business address","Bank account details","Details of authorised signatory"],
        link: "form-fill.html?form=gst-registration-form",
        source: "Goods and Services Tax Portal, Government of India"
      },
      {
        title: "Income Tax Return (ITR) Filing",
        act: "Income Tax Act, 1961",
        desc: "The annual statement of income and taxes filed with the Income Tax Department; the applicable ITR form depends on income sources.",
        checklist: ["Form 16 / income statements","Bank account and interest statements","Deduction proofs (80C, 80D, etc.)","Aadhaar-PAN linkage"],
        link: "form-fill.html?form=itr-filing",
        source: "Income Tax Department e-Filing Portal, Government of India"
      },
      {
        title: "Passport Application",
        act: "Passports Act, 1967",
        desc: "Filed online and completed with an in-person appointment for a fresh passport, reissue or renewal.",
        checklist: ["Proof of date of birth","Proof of present address","Aadhaar / voter ID","Passport-size photograph as per spec"],
        link: "form-fill.html?form=passport-application",
        source: "Passport Seva, Ministry of External Affairs"
      }
    ]
  }
];

const shelvesEl = document.getElementById('shelves');
const noResultsEl = document.getElementById('noResults');

if (shelvesEl && noResultsEl) {
  
}

function renderShelves(filterText){
  const q = (filterText || '').trim().toLowerCase();
  shelvesEl.innerHTML = '';
  let anyVisible = false;

  DATA.forEach((shelf, sIdx) => {
    const matchingForms = shelf.forms.filter(f =>
      !q || f.title.toLowerCase().includes(q) || shelf.shelf.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)
    );
    if(matchingForms.length === 0) return;
    anyVisible = true;

    const unit = document.createElement('div');
unit.className = 'shelf-unit';

// Create a unique ID for each shelf
unit.id = shelf.shelf
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');

    unit.innerHTML = `
      <div class="shelf-head">
        <span class="shelf-num">0${sIdx+1}</span>
        <h3>${shelf.shelf}</h3>
        <span class="shelf-sub">— ${shelf.sub}</span>
      </div>
      <div class="shelf-case">
        <div class="spine-row"></div>
        <div class="shelf-board"><span class="shelf-plate">${shelf.shelf}</span></div>
      </div>
    `;

    const row = unit.querySelector('.spine-row');
    matchingForms.forEach((form) => {
      const spine = document.createElement('button');
      spine.className = 'book-spine';
      spine.type = 'button';
      spine.innerHTML = `<span class="spine-title">${form.title}</span>`;
      spine.addEventListener('click', () => openModal(shelf, form));
      row.appendChild(spine);
    });

    shelvesEl.appendChild(unit);
  });

  noResultsEl.style.display = anyVisible ? 'none' : 'block';
}

const overlay = document.getElementById('overlay');
function openModal(shelf, form){
  document.getElementById('modalShelf').textContent = shelf.shelf;
  document.getElementById('modalTitle').textContent = form.title;
  document.getElementById('modalAct').textContent = form.act;
  document.getElementById('modalDesc').textContent = form.desc;
  const ul = document.getElementById('modalChecklist');
  ul.innerHTML = '';
  form.checklist.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  const link = document.getElementById('modalLink');
  link.href = form.link;
  document.getElementById('modalSourceNote').textContent = 'Source: ' + form.source + '. Always confirm the latest version and any state-specific requirements before use.';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
const modalClose = document.getElementById('modalClose');
const modalClose2 = document.getElementById('modalClose2');

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalClose2) {
    modalClose2.addEventListener('click', closeModal);
}
if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
}
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderShelves(e.target.value);
    });

    renderShelves('');
}

const generateBtn = document.getElementById("generateBtn");

if (generateBtn) {

    generateBtn.addEventListener("click", function () {

        

        const output = document.getElementById("draftOutput");

       

       

    });

}
function goToShelf() {

    const search = document
        .getElementById("heroSearch")
        .value
        .trim()
        .toLowerCase();

    if (search === "") {
        alert("Please enter a legal form name.");
        return;
    }

    // Look through every shelf
    for (const shelf of DATA) {

        // Look through every form in that shelf
        for (const form of shelf.forms) {

            if (
                form.title.toLowerCase().includes(search)
            ) {

                // Convert shelf name into the ID we created earlier
                const shelfId = shelf.shelf
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-");

                const shelfElement = document.getElementById(shelfId);

                if (shelfElement) {

                    shelfElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

                return;

            }

        }

    }

    alert("No matching form found.");

}