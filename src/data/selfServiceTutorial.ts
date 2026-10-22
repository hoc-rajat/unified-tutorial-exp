import type { Tutorial } from '../types/tutorial';

// Source: doc 2.pdf, 16-page self-filing draft, 16 October 2026.
// Illustrations and regulatory statements remain draft content pending owner review.
export const selfServiceTutorial: Tutorial = {
  "tutorialId": "nl-branch-registration-self-service",
  "topic": "Branch Registration",
  "country": "Netherlands",
  "experienceType": "self-service",
  "badge": "Self-Service Learning Path",
  "title": "Register a Dutch Branch Office in the Netherlands",
  "description": "Prepare a consistent self-filing registration file: check the structure, collect evidence, work through the source’s KvK forms and verify the registration afterwards.",
  "breadcrumbLabel": "Self-Service",
  "resourcesHeading": "Official Resources",
  "introduction": [
    {
      "type": "text",
      "heading": "Start here: prepare one consistent registration file",
      "body": [
        "You already have a company abroad and want to operate from the Netherlands. This source-draft tutorial is for foreign companies opening a real Dutch establishment. It explains preparation for self-filing: collect evidence, complete the relevant KvK forms, prepare submission and check the Trade Register afterwards.",
        "The source describes a branch as an establishment of the existing foreign parent, rather than a separate Dutch BV: the parent remains the legal entity behind contracts, assets and liability. Use the structure review in Chapter 1 before building your file. This prototype does not submit forms or determine your legal or tax position."
      ]
    },
    {
      "type": "info",
      "tone": "verify",
      "title": "Source draft — owner verification required",
      "body": "Adapted from “Register a Dutch Branch Office: Self-Filing Tutorial” (16 October 2026). The form references and examples below are draft instructional content, not approved live guidance. Confirm current official requirements for your circumstances; unresolved source claims are flagged at the relevant chapter."
    },
    {
      "type": "accordion",
      "heading": "What do you need before you start?",
      "items": [
        {
          "id": "question-1",
          "title": "Which evidence should be ready?",
          "body": "A current foreign-parent register extract; formation and director evidence; the proposed Dutch branch address and evidence of the right to use it; each relevant official’s details; and documents showing who may legally sign for the parent. Keep names, dates, addresses and authority consistent across the file."
        },
        {
          "id": "question-2",
          "title": "What are you registering, and which form covers it?",
          "body": "The source workflow separates the foreign parent (Form 6), its Dutch establishment (Form 9), the relevant officials (Form 11 for each relevant official), and an authorised representative only if appointed (Form 13). These are form references from the draft; confirm applicability and the current official editions before use."
        },
        {
          "id": "question-3",
          "title": "Which language version should you use?",
          "body": "The source says that the Dutch-language form is the legal version and should be signed and submitted, while English can help you prepare the data. Owner verification required: confirm the current language and signing instructions for each form and submission route."
        }
      ]
    },
    {
      "type": "accordion",
      "heading": "Before you open a form: which ten questions need evidence?",
      "items": [
        {
          "id": "question-1",
          "title": "Is a branch the right structure?",
          "body": "Compare branch, BV and other routes against who holds contracts, assets and liability. Write down the intended arrangement before filing."
        },
        {
          "id": "question-2",
          "title": "Do you have a real Dutch establishment?",
          "body": "Describe the structural presence, actual activity and proposed address. Resolve the address ambiguity flagged in Chapter 3."
        },
        {
          "id": "question-3",
          "title": "Who can sign for the parent?",
          "body": "Check articles, board decisions and powers of attorney. A senior job title alone does not establish signing authority."
        },
        {
          "id": "question-4",
          "title": "Could formal-foreign-company rules apply?",
          "body": "Collect the incorporation country and facts about where the business is managed and operates; request review if the position is unclear."
        },
        {
          "id": "question-5",
          "title": "Is the extract current enough?",
          "body": "Keep the issue date visible. Confirm the acceptable age for the intended submission rather than relying on an old extract."
        },
        {
          "id": "question-6",
          "title": "Do documents need translation or legalisation?",
          "body": "Check each document’s country, language and formality before paying for translations or apostilles."
        },
        {
          "id": "question-7",
          "title": "Can you prove the right to use the address?",
          "body": "Identify the lease, service agreement, ownership proof or written owner consent supporting the proposed premises."
        },
        {
          "id": "question-8",
          "title": "Who belongs on Form 11?",
          "body": "Use official corporate records to identify relevant directors or officials and their authority."
        },
        {
          "id": "question-9",
          "title": "Do you need Form 13?",
          "body": "Use the written authority document to determine whether a representative is appointed and what they may do."
        },
        {
          "id": "question-10",
          "title": "Will you attend or send the file?",
          "body": "Check which route is available for your situation and what originals, identification and legalised copies it requires."
        }
      ]
    },
    {
      "type": "info",
      "tone": "verify",
      "title": "What should you stop and ask?",
      "body": "If you cannot answer a preparation question with a document in front of you, do not guess. Resolve it before completing the affected form. Note the question and the supporting document for a human review. Q&A Request is a prototype action only; its destination and availability are not confirmed."
    }
  ],
  "contextualSwitch": {
    "title": "Would you prefer assistance with this chapter?",
    "description": "Explore the related stage in the HOC-assisted learning path.",
    "ctaLabel": "View HOC Approach"
  },
  "relatedSteps": {
    "decide-branch-fit": "understand-hoc-process",
    "create-document-folder": "submit-documents",
    "confirm-dutch-address": "review-needs",
    "complete-form-6": "submit-documents",
    "complete-form-9": "submit-documents",
    "complete-form-11": "submit-documents",
    "complete-form-13": "submit-documents",
    "check-document-formalities": "submit-documents",
    "sign-submit-kvk": "follow-progress",
    "verify-registration-next-actions": "next-steps"
  },
  "finalCta": {
    "title": "Is one question holding you back?",
    "description": "Bring your plan and the document behind your question to a human review.",
    "buttonLabel": "Preview Q&A Request",
    "preview": {
      "title": "Q&A Request — prototype preview",
      "body": "This preview does not send a request or book a session. The Q&A destination, availability and the source’s “free” offer require owner confirmation.",
      "points": [
        "Identify the question: structure, address, authority, formalities or next actions.",
        "Note which supporting document needs review; this prototype collects no uploads.",
        "The source’s “Start your Registry” destination (/registry) is also unconfirmed and is not linked here."
      ]
    }
  },
  "steps": [
    {
      "id": "decide-branch-fit",
      "title": "Decide whether a branch fits",
      "readTime": "Self-filing preparation guide",
      "intro": "Decide which company will carry the Dutch activity before you prepare registration documents.",
      "blocks": [
        {
          "type": "text",
          "heading": "When does the parent stay in charge?",
          "body": [
            "In the source’s branch scenario, the foreign parent keeps the contracts, revenue, assets and business risk. Illustrative example: a German GmbH opens a Dutch sales office, continues contracting with clients and uses the office to support Dutch customers at a registered local address. This example is not an eligibility decision for your company.",
            "A branch is less obvious when you want Dutch investors, a separate Dutch shareholder structure or a separate liability position. Compare a Dutch BV or another route with an adviser before assuming the branch route fits."
          ]
        },
        {
          "type": "procedure",
          "heading": "What should you write down?",
          "items": [
            {
              "title": "Check the parent’s role",
              "body": "Use your corporate records and operating plan to identify the legal entity that will sign contracts, employ people, own stock and carry the business risk."
            },
            {
              "title": "Complete the source’s planning sentence",
              "body": "“The Dutch branch will [describe activity], while [foreign parent legal name] remains the company that [signs contracts / employs people / owns stock / carries liability].” Save this sentence with your file."
            },
            {
              "title": "Confirm the route before collecting forms",
              "body": "If the sentence is clear and the structure has been checked, continue to the document folder. If not, pause rather than build paperwork around an unresolved structure."
            }
          ]
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "What should you stop and ask?",
          "body": "If the branch-versus-BV choice or the parent’s liability position is unclear, take your planning sentence to a human reviewer. The source’s offer of a “free” Q&A session needs owner confirmation; this prototype makes no pricing promise. Note the question and the supporting document for a human review. Q&A Request is a prototype action only; its destination and availability are not confirmed."
        }
      ]
    },
    {
      "id": "create-document-folder",
      "title": "Create your document folder",
      "readTime": "Self-filing preparation guide",
      "intro": "Collect evidence before entering data. Create four clearly named folders so you do not have to search for a registration number, birth date or board decision halfway through a form.",
      "blocks": [
        {
          "type": "checklist",
          "heading": "A. Foreign parent company",
          "items": [
            {
              "id": "item-1",
              "label": "Current foreign business-register extract",
              "detail": "Keep the issue date visible."
            },
            {
              "id": "item-2",
              "label": "Formation evidence",
              "detail": "Deed of incorporation, certificate of formation or similar evidence."
            },
            {
              "id": "item-3",
              "label": "Articles or operating agreement",
              "detail": "Use the records for the actual parent legal entity."
            },
            {
              "id": "item-4",
              "label": "Director appointment evidence",
              "detail": "Include separate evidence where the articles do not establish the appointments."
            }
          ]
        },
        {
          "type": "checklist",
          "heading": "B. Dutch branch",
          "items": [
            {
              "id": "item-1",
              "label": "Proposed visiting address and evidence",
              "detail": "Lease, service agreement, property evidence or written owner consent; confirm suitability in Chapter 3."
            },
            {
              "id": "item-2",
              "label": "Short activity description",
              "detail": "Describe the actual work planned in the Netherlands."
            },
            {
              "id": "item-3",
              "label": "Planned start date",
              "detail": "Keep the supporting launch plan or related evidence."
            },
            {
              "id": "item-4",
              "label": "Branch trade name",
              "detail": "Record it separately if different from the parent’s legal name."
            }
          ]
        },
        {
          "type": "checklist",
          "heading": "C. Directors and officials",
          "items": [
            {
              "id": "item-1",
              "label": "Personal details",
              "detail": "Full legal names, dates and places of birth, nationalities and residential addresses."
            },
            {
              "id": "item-2",
              "label": "Roles and appointment dates",
              "detail": "Check the official corporate records."
            },
            {
              "id": "item-3",
              "label": "Signing-authority evidence",
              "detail": "Collect the records showing sole, joint or other authority; do not infer it from titles."
            }
          ]
        },
        {
          "type": "checklist",
          "heading": "D. Representatives — only if appointed",
          "items": [
            {
              "id": "item-1",
              "label": "Power of attorney or other written authority",
              "detail": "Do not create a representative appointment merely to fill a form."
            },
            {
              "id": "item-2",
              "label": "Identity and residential details",
              "detail": "Use the appointed person’s supported details."
            },
            {
              "id": "item-3",
              "label": "Authority scope and dates",
              "detail": "Record the start date and any end date or limits."
            }
          ]
        },
        {
          "type": "decision",
          "question": "Is your parent-company extract still current?",
          "why": "An outdated extract can leave the registration file relying on old company information. Keep its issue date visible before entering data.",
          "evidence": "The current foreign business-register extract and the confirmed extract-age requirement for your intended submission route.",
          "outcomes": [
            {
              "label": "The issue date meets the confirmed requirement",
              "action": "Keep the dated extract in the parent-company folder and use it consistently across the forms."
            },
            {
              "label": "The extract is older than the confirmed requirement",
              "action": "Obtain a current extract before relying on it in the registration file."
            },
            {
              "label": "The issue date or acceptable age is unclear",
              "action": "Check the date and confirm the applicable requirement before treating the extract as ready."
            }
          ],
          "commonMistake": "Assuming that an extract accepted in the home country is recent enough for the Dutch registration route.",
          "confirmation": "The source workflow calls one month the practical maximum extract age. That threshold is unverified; confirm the current rule for the relevant route."
        },
        {
          "type": "visual",
          "variant": "documents",
          "title": "Your branch document file",
          "sections": [
            {
              "heading": "Foreign parent company",
              "rows": [
                {
                  "label": "Company-register extract",
                  "value": "Issue date: [DD MMM YYYY]",
                  "emphasis": true,
                  "status": "included"
                },
                {
                  "label": "Formation, articles and appointments",
                  "value": "Keep company identity and director evidence together.",
                  "status": "included"
                }
              ]
            },
            {
              "heading": "Dutch branch",
              "rows": [
                {
                  "label": "Address evidence",
                  "value": "Lease, service agreement, ownership evidence or owner consent.",
                  "status": "to-check"
                },
                {
                  "label": "Activity and start date",
                  "value": "[Factual description] · [Planned start date]",
                  "status": "to-check"
                }
              ]
            },
            {
              "heading": "People and authority",
              "rows": [
                {
                  "label": "Officials and signing authority",
                  "value": "Personal details and supporting corporate records.",
                  "status": "to-check"
                },
                {
                  "label": "Representative, only if appointed",
                  "value": "Written authority and scope.",
                  "status": "to-check"
                }
              ]
            }
          ],
          "note": "Example checklist only — these indicators do not reflect uploaded documents or saved progress. Confirm extract age for the intended route.",
          "caption": "Aim for one clean file where company names, dates, addresses and authority statements match."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Check the folder for inconsistent names or missing authority evidence, then confirm the proposed address and its supporting document. Checklist ticks in this prototype are review aids, not a saved document upload or approval."
          ]
        }
      ]
    },
    {
      "id": "confirm-dutch-address",
      "title": "Confirm the Dutch address",
      "readTime": "Self-filing preparation guide",
      "intro": "Identify the visiting address, distinguish it from any postal address, and keep the evidence explaining why the company may use the proposed premises.",
      "blocks": [
        {
          "type": "decision",
          "question": "Can the company use this address for registration?",
          "why": "The proposed visiting address needs an evidence trail explaining why the foreign company may use the premises. A separate postal address answers a different question.",
          "evidence": "A lease, service agreement, ownership evidence or written owner consent; compare the named company with the legal name on Form 6.",
          "outcomes": [
            {
              "label": "Use of the address and its suitability are confirmed",
              "action": "Keep the evidence in the branch folder and use the checked visiting address on the forms."
            },
            {
              "label": "Evidence is missing or names do not match",
              "action": "Resolve the agreement, consent or company-name discrepancy before relying on this address."
            },
            {
              "label": "You are unsure which address is permitted",
              "action": "Pause the address entry on Form 9 and ask for review of the proposed premises and actual activity."
            }
          ],
          "commonMistake": "Relying on “our local contact said it was fine,” or substituting a postal address for a visiting address without checking the requirements.",
          "confirmation": "The draft describes an actual Dutch establishment but also says the visiting address may be the parent’s headquarters outside the Netherlands. These statements need reconciliation; neither is an approved eligibility rule.",
          "qaPrompt": "Bring the proposed address, the activity connected to it and the agreement or consent. Ask which document supports registration at this address and how the source’s conflicting address statements should be resolved."
        },
        {
          "type": "checklist",
          "heading": "What evidence can you put beside the address?",
          "items": [
            {
              "id": "item-1",
              "label": "Record the proposed visiting address",
              "detail": "Street and number, postcode and city; identify the actual activity connected to the premises."
            },
            {
              "id": "item-2",
              "label": "Identify the supporting document",
              "detail": "The source lists a lease, service agreement, ownership evidence or written owner consent. Confirm which evidence is appropriate for your situation."
            },
            {
              "id": "item-3",
              "label": "Check the company named in the evidence",
              "detail": "It should be consistent with the foreign parent’s legal name used on Form 6."
            },
            {
              "id": "item-4",
              "label": "Keep any postal address separate",
              "detail": "Do not substitute a correspondence address for the visiting address without confirming the requirements."
            }
          ]
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "Is HOC postal-address availability confirmed?",
          "body": "The draft says HOC can provide postal addresses in all major Dutch cities. This service-coverage claim needs owner confirmation and is not an offer in this prototype."
        },
        {
          "type": "visual",
          "variant": "evidence",
          "title": "Address evidence close-up",
          "sections": [
            {
              "heading": "Proposed visiting address",
              "rows": [
                {
                  "label": "Street and number",
                  "value": "[Street and number]"
                },
                {
                  "label": "Postcode and city",
                  "value": "[Postcode and city]"
                }
              ]
            },
            {
              "heading": "Evidence beside the address",
              "rows": [
                {
                  "label": "Document to check",
                  "value": "[Lease / service agreement / owner consent / ownership evidence]"
                },
                {
                  "label": "Company name on evidence",
                  "value": "[Foreign parent company legal name]",
                  "emphasis": true
                },
                {
                  "label": "Compare with Form 6",
                  "value": "[Same supported legal name]",
                  "emphasis": true
                }
              ]
            }
          ],
          "note": "Keep postal and visiting addresses separate. The source’s conflicting statements about an overseas headquarters address still need owner confirmation.",
          "caption": "The company name on the address evidence should make sense next to Form 6."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Once the address and evidence have been checked, keep them in the branch folder and use the official parent-company documents to prepare Form 6."
          ]
        }
      ]
    },
    {
      "id": "complete-form-6",
      "title": "Complete Form 6: foreign parent company",
      "readTime": "Self-filing preparation guide",
      "intro": "Use Form 6 in the source workflow to identify the foreign company behind the branch. Copy supported facts from corporate evidence, not a website, invoice or memory.",
      "blocks": [
        {
          "type": "checklist",
          "heading": "Which parent-company details should you prepare?",
          "items": [
            {
              "id": "item-1",
              "label": "Legal name and legal form",
              "detail": "Copy the register wording exactly; do not substitute a Dutch trade name or translate the legal form."
            },
            {
              "id": "item-2",
              "label": "Incorporation country and date",
              "detail": "Check the extract and formation evidence."
            },
            {
              "id": "item-3",
              "label": "Registered office",
              "detail": "Use the official company record."
            },
            {
              "id": "item-4",
              "label": "Foreign register name and registration number",
              "detail": "Keep the current extract next to the form."
            },
            {
              "id": "item-5",
              "label": "Business activities",
              "detail": "Use a factual description supported by the company’s actual activity."
            },
            {
              "id": "item-6",
              "label": "Address and contact details requested by the form",
              "detail": "Use the checked address information; resolve Chapter 3 before treating an address as suitable."
            },
            {
              "id": "item-7",
              "label": "EEA and legal-structure information",
              "detail": "Identify the incorporation country and collect operating facts before answering legal-status questions."
            }
          ]
        },
        {
          "type": "text",
          "heading": "What is the company’s exact legal name?",
          "body": [
            "The source warns against shortening “Example Global Services Limited” to “Example Global”. Keep spelling, punctuation and legal form consistent across the extract and forms. These are illustrative names only.",
            "A small mismatch can make documents appear to concern different companies. Compare the legal-name entry against the extract before moving to the next field."
          ]
        },
        {
          "type": "visual",
          "variant": "fields",
          "title": "Form 6 · Foreign parent company",
          "sections": [
            {
              "heading": "Company identity — focused fields",
              "rows": [
                {
                  "label": "Legal name",
                  "value": "[Exact legal name from foreign register]",
                  "emphasis": true
                },
                {
                  "label": "Legal form",
                  "value": "[Legal form from company evidence]"
                },
                {
                  "label": "Country of incorporation",
                  "value": "[Country]"
                },
                {
                  "label": "Foreign register",
                  "value": "[Register name]"
                },
                {
                  "label": "Registration number",
                  "value": "[Foreign registration number]"
                },
                {
                  "label": "Date of incorporation",
                  "value": "[DD MMM YYYY]"
                },
                {
                  "label": "Registered office",
                  "value": "[City, country]"
                }
              ]
            }
          ],
          "note": "Schematic, not an exact KvK form screenshot. Confirm the current official form title, field wording and question numbers; none are reproduced as verified here.",
          "caption": "Copy company identity from the current foreign-register extract. Keep spelling, punctuation and legal form consistent."
        },
        {
          "type": "accordion",
          "heading": "Could formal-foreign-company rules apply?",
          "items": [
            {
              "id": "question-1",
              "title": "Which facts should you collect?",
              "body": "Record where the parent is incorporated, where it is mainly managed, where its real activities occur, and whether the Netherlands is effectively its main operating base. The founder’s residence or location of a bank account is not a substitute for these facts."
            },
            {
              "id": "question-2",
              "title": "Which source claim needs review?",
              "body": "The draft says extra obligations may apply to a non-EEA company operating only or mainly in the Netherlands. Owner verification required: this is a prompt for specialist review, not a complete legal test or automatic classification."
            }
          ]
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "What should you stop and ask?",
          "body": "If formal-foreign-company status is unclear, especially for a non-EEA parent or activity concentrated in the Netherlands, bring the extract and operating facts for review rather than selecting an answer by instinct. Note the question and the supporting document for a human review. Q&A Request is a prototype action only; its destination and availability are not confirmed."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Check the completed identity details against the extract, keep that draft in your parent-company folder and move to the Dutch establishment details on Form 9."
          ]
        }
      ]
    },
    {
      "id": "complete-form-9",
      "title": "Complete Form 9: Dutch branch",
      "readTime": "Self-filing preparation guide",
      "intro": "Use the source’s Form 9 workflow to explain the establishment: what it is called, where it operates, when it starts and what it will actually do.",
      "blocks": [
        {
          "type": "procedure",
          "heading": "Which branch details should you prepare?",
          "items": [
            {
              "title": "Identify the branch",
              "body": "Record its trade name and checked visiting address. Keep the address evidence alongside the form."
            },
            {
              "title": "Describe the work plainly",
              "body": "The source contrasts “International commercial activities” with “Software implementation and customer-support services for Dutch business clients.” The latter is an illustrative example of a specific description, not wording to copy if it does not describe your activity."
            },
            {
              "title": "Support the start date",
              "body": "Use the actual planned or commenced activity date. Compare it with the address agreement, first employee, first customer activity or launch plan; do not choose a random date to speed up registration."
            },
            {
              "title": "Check establishment questions",
              "body": "The source mockup includes a main-Dutch-establishment Yes/No field. Confirm the current form’s wording and how it applies to your business before answering."
            }
          ]
        },
        {
          "type": "visual",
          "variant": "fields",
          "title": "Form 9 · Dutch branch",
          "sections": [
            {
              "heading": "Establishment details — focused fields",
              "rows": [
                {
                  "label": "Branch trade name",
                  "value": "[Example Netherlands Branch]"
                },
                {
                  "label": "Visiting address",
                  "value": "[Checked street, postcode and city]"
                },
                {
                  "label": "Start date",
                  "value": "[Supportable DD MMM YYYY]"
                },
                {
                  "label": "Main Dutch establishment",
                  "value": "[Yes / No — confirm applicability]"
                },
                {
                  "label": "Dutch activity",
                  "value": "Software implementation and customer-support services for Dutch business clients.",
                  "emphasis": true
                }
              ]
            }
          ],
          "note": "Schematic, not an exact KvK form screenshot. The activity above is the source’s illustrative example: use it only if it describes the actual work.",
          "caption": "Use the real address and a supportable start date; describe work genuinely carried out through the branch."
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "Do you supply temporary workers?",
          "body": "The source flags lending, seconding or supplying workers to Dutch clients for payment as potentially subject to additional registration rules. Calling the service “consultancy” does not settle the issue. Owner/specialist verification required: check who directs the workers and how the service is delivered before answering."
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "What should you stop and ask?",
          "body": "If your staffing arrangement or start date is unclear, check the contracts and launch evidence. Do not guess that consultants fall outside worker-supply rules. Note the question and the supporting document for a human review. Q&A Request is a prototype action only; its destination and availability are not confirmed."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Compare the establishment details with your branch folder and parent-company identity. Then identify the officials and authority evidence needed for Form 11."
          ]
        }
      ]
    },
    {
      "id": "complete-form-11",
      "title": "Complete Form 11: officials and signing authority",
      "readTime": "Self-filing preparation guide",
      "intro": "Identify the relevant officials of the foreign parent. The aim is to record supported legal roles and authority, not every senior person working on the Dutch market.",
      "blocks": [
        {
          "type": "checklist",
          "heading": "What should you prepare for each relevant official?",
          "items": [
            {
              "id": "item-1",
              "label": "Full legal name",
              "detail": "Match identity and corporate evidence."
            },
            {
              "id": "item-2",
              "label": "Birth details and nationality",
              "detail": "Date and place of birth, plus nationality."
            },
            {
              "id": "item-3",
              "label": "Residential address",
              "detail": "Keep supporting evidence available for the submission-route check."
            },
            {
              "id": "item-4",
              "label": "Role and appointment date",
              "detail": "Use the company register, appointment records and corporate documents."
            },
            {
              "id": "item-5",
              "label": "Signing authority",
              "detail": "Check articles, resolutions and any authority documents together."
            },
            {
              "id": "item-6",
              "label": "End date, where relevant",
              "detail": "Use the actual documented end date rather than an assumption."
            }
          ]
        },
        {
          "type": "accordion",
          "heading": "Who belongs on Form 11?",
          "items": [
            {
              "id": "question-1",
              "title": "Who is legally appointed?",
              "body": "Start with the official register and corporate records. Ask who is legally appointed as a director, officer or other official, then confirm which of those people must be recorded for the Dutch registration. Leading the Dutch market is not by itself evidence of a legal appointment."
            }
          ]
        },
        {
          "type": "decision",
          "question": "Can this director sign alone?",
          "why": "The authority shown on Form 11 must match the parent’s records. A commercial title does not establish permission to sign alone.",
          "evidence": "Read the articles, board resolutions, company-register extract and any power of attorney together.",
          "outcomes": [
            {
              "label": "The evidence supports sole signing authority",
              "action": "Record the supported authority. As a consistency check, ask whether this person could sign a Dutch customer contract alone tomorrow; this does not replace interpreting the documents."
            },
            {
              "label": "The evidence requires joint signing",
              "action": "Record joint authority and identify the other authorised signer required by the parent’s rules. Do not present this official as able to sign alone."
            },
            {
              "label": "The records conflict or leave the authority unclear",
              "action": "Resolve the discrepancy with a human reviewer before signing the Dutch forms."
            }
          ],
          "commonMistake": "Selecting sole authority because it makes registration easier rather than because the corporate evidence supports it.",
          "qaPrompt": "Bring the articles, resolutions, extract and any power of attorney. Identify the conflicting authority wording and ask who must sign together."
        },
        {
          "type": "visual",
          "variant": "fields",
          "title": "Form 11 · Company official",
          "sections": [
            {
              "heading": "Identity and signing authority",
              "rows": [
                {
                  "label": "Full legal name",
                  "value": "[Official’s full legal name]"
                },
                {
                  "label": "Date of birth",
                  "value": "[DD MMM YYYY]"
                },
                {
                  "label": "Nationality",
                  "value": "[Nationality]"
                },
                {
                  "label": "Role",
                  "value": "Managing director — illustrative example"
                },
                {
                  "label": "Signing authority",
                  "value": "Signs jointly — illustrative example",
                  "emphasis": true
                }
              ]
            }
          ],
          "note": "Schematic, not an exact KvK form screenshot. “Signs jointly” is not a recommended selection; use the authority supported by the actual corporate evidence.",
          "caption": "Personal and authority details should match the corporate evidence. This example does not establish anyone’s authority to sign."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Keep each relevant official’s details with their supporting records. Next decide whether there is a separately appointed representative whose written authority belongs in Form 13."
          ]
        }
      ]
    },
    {
      "id": "complete-form-13",
      "title": "Complete Form 13 if appointing a representative",
      "readTime": "Self-filing preparation guide",
      "intro": "Check whether the parent has formally appointed a representative. Working in the Netherlands or helping with registration is not the same as having written authority.",
      "blocks": [
        {
          "type": "decision",
          "question": "Do you need to register an authorised representative?",
          "why": "Form 13 in the source workflow records a formal appointment. Helping locally or working in the Netherlands is not the same as having authority to represent the parent.",
          "evidence": "The written power of attorney or appointment: check the person or entity, scope, authority type and start/end dates.",
          "outcomes": [
            {
              "label": "No representative is appointed; directors handle matters",
              "action": "Confirm that Form 13 is not needed for this file, then continue to the document-formality check without creating a representative record."
            },
            {
              "label": "A representative has documented authority",
              "action": "Prepare Form 13 to mirror that written authority. Use the checklist below; do not expand a limited mandate through the form."
            },
            {
              "label": "An appointment is intended but authority is missing or unclear",
              "action": "Resolve the written appointment or scope before presenting someone as an authorised representative."
            }
          ],
          "commonMistake": "Appointing someone just to fill an optional form, or assuming the person who helps locally has legal authority.",
          "confirmation": "The source says Form 13 may not be needed when the foreign directors handle registration and branch decisions themselves. Confirm applicability for the actual file.",
          "qaPrompt": "Bring the intended appointment and any written authority. Ask whether a representative should be recorded and what scope the evidence supports."
        },
        {
          "type": "checklist",
          "heading": "If appointed, what must match the written authority?",
          "items": [
            {
              "id": "item-1",
              "label": "Representative identity and residential details",
              "detail": "Use supported details for the appointed representative."
            },
            {
              "id": "item-2",
              "label": "Authority type",
              "detail": "The source example shows general, limited or joint authority. Confirm the current form options and match the document."
            },
            {
              "id": "item-3",
              "label": "Scope of authority",
              "detail": "Illustrative example: branch registration matters only. Do not extend a limited mandate through the form."
            },
            {
              "id": "item-4",
              "label": "Start date and any end date",
              "detail": "Match the written appointment or power of attorney."
            }
          ]
        },
        {
          "type": "visual",
          "variant": "fields",
          "title": "Form 13 · Authorised representative",
          "sections": [
            {
              "heading": "Written authority and its limits",
              "rows": [
                {
                  "label": "Appointed representative",
                  "value": "[Person or entity named in written authority]",
                  "emphasis": true
                },
                {
                  "label": "Written authority",
                  "value": "[Power of attorney / appointment document]"
                },
                {
                  "label": "Authority type",
                  "value": "[General / Limited / Joint — check document]"
                },
                {
                  "label": "Scope",
                  "value": "Branch registration matters only — illustrative example",
                  "emphasis": true
                },
                {
                  "label": "Start date",
                  "value": "[DD MMM YYYY]"
                },
                {
                  "label": "End date",
                  "value": "[If applicable]"
                }
              ]
            }
          ],
          "note": "Schematic, not an exact KvK form screenshot. The document reference is a review aid, not a verified official field. Confirm Form 13 applicability and current form options.",
          "caption": "Mirror the written power of attorney; the form should not create new authority by itself."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "If no representative is appointed and that position has been checked, continue without creating a Form 13 record. Otherwise keep the draft with its authority document. Both routes continue to the document-formality check."
          ]
        }
      ]
    },
    {
      "id": "check-document-formalities",
      "title": "Check translation, legalisation and signatures",
      "readTime": "Self-filing preparation guide",
      "intro": "Check the acceptability of each document for your intended submission route. Having a PDF does not establish that its language, original/copy status or signature treatment is suitable.",
      "blocks": [
        {
          "type": "decision",
          "question": "Does this document require translation or legalisation?",
          "why": "A PDF alone does not show that a document has the language, format and formalities needed for the chosen submission route.",
          "evidence": "For each extract, articles, director ID and address document, check issuing country, language, original/copy status and the confirmed requirements for your route.",
          "outcomes": [
            {
              "label": "Required formalities are confirmed and complete",
              "action": "Record the result in the document review below and keep the supporting version with the file."
            },
            {
              "label": "Translation or legalisation is confirmed as required",
              "action": "Arrange the specified treatment for that document, then recheck it against the requirement before submission."
            },
            {
              "label": "The requirement is unknown",
              "action": "Keep the review row pending. Ask before paying for translation, notarisation or legalisation."
            }
          ],
          "commonMistake": "Applying one language exemption or apostille rule to every country, document and submission route.",
          "confirmation": "The draft describes Dutch, English, German and French as generally the easiest starting point; other languages may need translation. It says legalisation depends on country and document type. Confirm acceptance and formalities individually.",
          "qaPrompt": "Bring the document and its review row, including issuing country, language and original/copy status. Ask which formalities apply to the actual submission route before arranging paid work."
        },
        {
          "type": "procedure",
          "heading": "What should your document review record contain?",
          "items": [
            {
              "title": "Create one row per document",
              "body": "Start with the foreign-register extract, articles, director ID and address evidence from your folders."
            },
            {
              "title": "Record origin and format",
              "body": "For each, note issuing country, language and whether you hold the original or a copy."
            },
            {
              "title": "Record the required checks",
              "body": "Add “Translation needed?” and “Legalisation checked?” to each row. Leave unresolved requirements visibly pending rather than marking them approved."
            },
            {
              "title": "Check signatures and authority",
              "body": "Compare the intended signers with the authority evidence and the current form instructions. Check the route-specific original/copy and identification requirements before arranging formalities."
            }
          ]
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Keep the completed document review beside your forms. Once unresolved formalities and signing questions are settled, prepare the submission route and perform the final consistency check."
          ]
        }
      ]
    },
    {
      "id": "sign-submit-kvk",
      "title": "Sign and submit the forms to KvK",
      "readTime": "Self-filing preparation guide",
      "intro": "Choose an available submission route that you can complete properly, then check the entire file against the foreign-company extract before signing and sending.",
      "blocks": [
        {
          "type": "decision",
          "question": "Can the required signatory attend KvK in person?",
          "why": "The submission route affects preparation of originals, identification and supporting evidence. Choose a route that can be completed properly.",
          "evidence": "Check the signatory’s authority and availability, the prepared document file, and confirmed attendance or postal requirements for this registration.",
          "outcomes": [
            {
              "label": "The required director or representative can attend",
              "action": "Confirm who must attend and appointment arrangements. The draft lists signed Dutch forms, supporting documents, valid ID and any required residential-address or authority evidence."
            },
            {
              "label": "The required person cannot attend",
              "action": "Check whether post/courier submission is available. The draft lists original signed Dutch forms, supporting documents, legalised ID copies and recent residential-address evidence where applicable, tracked delivery and a complete retained copy."
            },
            {
              "label": "Attendance, authority or route eligibility is unresolved",
              "action": "Pause and confirm the route, destination and evidence requirements before booking or dispatching anything."
            }
          ],
          "commonMistake": "Rushing a postal file with missing legalisation or evidence, or assuming inability to attend automatically makes postal submission available.",
          "confirmation": "The draft describes in-person and post/courier options. Confirm eligibility, appointment arrangements, destination, current Dutch-form requirements, signatures and identity/address evidence. This prototype does not book or send anything.",
          "qaPrompt": "Bring the authority evidence and the prepared document list. Ask who must attend or whether postal submission is available, and which originals or copies the route requires."
        },
        {
          "type": "visual",
          "variant": "routes",
          "title": "Prepare the submission route",
          "sections": [
            {
              "heading": "Attend KvK in person",
              "rows": [
                {
                  "label": "Who attends?",
                  "value": "Appropriate director or authorised representative; confirm who must attend."
                },
                {
                  "label": "Forms and evidence",
                  "value": "Completed, signed Dutch forms and supporting documents."
                },
                {
                  "label": "Identity and authority",
                  "value": "Valid identification; additional residential-address or authority evidence where required."
                }
              ]
            },
            {
              "heading": "Post or courier",
              "rows": [
                {
                  "label": "Can this route be used?",
                  "value": "If the relevant official cannot attend, confirm whether postal submission is available."
                },
                {
                  "label": "Forms and evidence",
                  "value": "Original signed Dutch forms and required supporting documents."
                },
                {
                  "label": "Identity and delivery",
                  "value": "Legalised ID copies and recent residential-address evidence where applicable; tracked delivery and a complete retained copy."
                }
              ]
            }
          ],
          "note": "Both routes are illustrative and subject to verification. Confirm eligibility, appointment arrangements, destination, signatures and required originals/copies before acting.",
          "caption": "Choose a route you can complete properly; missing legalisation or evidence is not solved by rushing the file."
        },
        {
          "type": "checklist",
          "heading": "Does every form tell the same story?",
          "items": [
            {
              "id": "item-1",
              "label": "Legal company name is identical everywhere",
              "detail": "Put all forms next to the current foreign-register extract."
            },
            {
              "id": "item-2",
              "label": "Official names and dates match",
              "detail": "Compare with identity and corporate records."
            },
            {
              "id": "item-3",
              "label": "Address is supported",
              "detail": "Check the agreement or consent and resolve the Chapter 3 ambiguity."
            },
            {
              "id": "item-4",
              "label": "Signing authority is documented",
              "detail": "Check that the signers and any joint-signing requirements match the records."
            },
            {
              "id": "item-5",
              "label": "Required form versions and signatures are checked",
              "detail": "The source specifies signed Dutch versions; confirm current official instructions before use."
            }
          ]
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "Is the complete file consistent?",
          "body": "Pause if any name, date, address, authority statement or required signature remains unresolved. A prototype checklist tick does not establish that a registration file is accepted."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "Keep a complete copy and the appointment or delivery record. After submission, follow any requests from KvK. Continue to the verification chapter when you have actual registration confirmation; advancing in this tutorial does not register the branch."
          ]
        }
      ]
    },
    {
      "id": "verify-registration-next-actions",
      "title": "Verify registration and next actions",
      "readTime": "Self-filing preparation guide",
      "intro": "When you receive actual registration confirmation, check the public record before reusing the details in business documents. Tutorial completion alone does not establish registration.",
      "blocks": [
        {
          "type": "info",
          "tone": "verify",
          "title": "What confirmation should you expect?",
          "body": "The source says a KvK number and invoice arrive by post and a Trade Register extract can then be ordered. Owner verification required: confirm the current confirmation/delivery process. Retain the actual registration correspondence and any extract you obtain; no processing-time guarantee is made here."
        },
        {
          "type": "visual",
          "variant": "completion",
          "title": "After actual registration confirmation",
          "sections": [
            {
              "heading": "Illustrative registration record",
              "rows": [
                {
                  "label": "Dutch branch",
                  "value": "[Example Netherlands Branch]"
                },
                {
                  "label": "KvK number",
                  "value": "[Number from actual KvK confirmation]"
                },
                {
                  "label": "Example status",
                  "value": "Registered — illustration only",
                  "emphasis": true
                },
                {
                  "label": "Proof to retain",
                  "value": "[Registration correspondence / Trade Register extract]"
                }
              ]
            }
          ],
          "note": "Next: search the Trade Register on kvk.nl using the actual KvK number, branch name or parent-company name. Compare names, address, activities and officials before reusing the details.",
          "caption": "Check the public Trade Register details after actual confirmation. Viewing or completing this tutorial does not register a branch or provide proof of registration."
        },
        {
          "type": "procedure",
          "heading": "How should you check the Trade Register?",
          "items": [
            {
              "title": "Find the record",
              "body": "The source directs you to kvk.nl. Search using your KvK number, Dutch branch name or foreign parent-company name."
            },
            {
              "title": "Compare the registered details",
              "body": "Check the legal company name, branch name, visiting address, activities, directors and representatives against the file you submitted."
            },
            {
              "title": "Resolve errors before reuse",
              "body": "Address discrepancies before copying details to invoices, contracts, banking applications, a website or marketplace accounts. Check the appropriate correction process rather than assuming this tutorial updates the register."
            }
          ]
        },
        {
          "type": "checklist",
          "heading": "What should you organise after registration?",
          "items": [
            {
              "id": "item-1",
              "label": "Save the correspondence and extract",
              "detail": "Keep registration proof available for banks, suppliers, landlords, customers or marketplaces."
            },
            {
              "id": "item-2",
              "label": "Use the checked branch details",
              "detail": "Update invoices and contracts only after comparing the public record."
            },
            {
              "id": "item-3",
              "label": "Watch for tax correspondence",
              "detail": "The source says KvK passes information for tax follow-up; owner verification required. Do not assume this completes VAT or other registrations."
            },
            {
              "id": "item-4",
              "label": "Check access to Dutch business services",
              "detail": "The source mentions eHerkenning for several portals. Confirm whether your intended services require it."
            },
            {
              "id": "item-5",
              "label": "Create a compliance calendar",
              "detail": "Identify applicable tax, payroll, annual-account and renewal dates; the list is a prompt to check applicability, not a statement that every duty applies."
            },
            {
              "id": "item-6",
              "label": "Keep one controlled corporate folder",
              "detail": "Retain documents for future banking, supplier checks and changes."
            }
          ]
        },
        {
          "type": "accordion",
          "heading": "Which ten questions should your final file answer?",
          "items": [
            {
              "id": "question-1",
              "title": "Is the branch structure appropriate?",
              "body": "Keep the planning sentence and any structure review."
            },
            {
              "id": "question-2",
              "title": "Is address use supported?",
              "body": "Keep the evidence and resolve the source’s visiting-address ambiguity."
            },
            {
              "id": "question-3",
              "title": "Is Form 6’s legal name exact?",
              "body": "Compare it with the foreign register."
            },
            {
              "id": "question-4",
              "title": "Has formal-foreign-company status been considered?",
              "body": "Keep the operating facts and specialist review where needed."
            },
            {
              "id": "question-5",
              "title": "Is the branch start date supportable?",
              "body": "Match it to the actual launch evidence."
            },
            {
              "id": "question-6",
              "title": "Does the activity description explain the work?",
              "body": "Use a specific factual description, not a sales pitch."
            },
            {
              "id": "question-7",
              "title": "Are the right officials recorded?",
              "body": "Match Form 11 to appointments and corporate records."
            },
            {
              "id": "question-8",
              "title": "Does signing authority match the evidence?",
              "body": "Check sole, joint and other limitations."
            },
            {
              "id": "question-9",
              "title": "Is any representative’s authority written down?",
              "body": "Match Form 13 to the actual appointment and scope."
            },
            {
              "id": "question-10",
              "title": "Were formalities and submission checked for this file?",
              "body": "Retain the document review, signed-form copy and route evidence."
            }
          ]
        },
        {
          "type": "info",
          "tone": "verify",
          "title": "What should you stop and ask?",
          "body": "Hiring staff, holding stock, signing Dutch contracts, charging VAT or moving management into the Netherlands can affect next actions. Bring the specific operating plan and unresolved question for review; do not infer tax, payroll or compliance approval from registration. Note the question and the supporting document for a human review. Q&A Request is a prototype action only; its destination and availability are not confirmed."
        },
        {
          "type": "text",
          "heading": "What happens next?",
          "body": [
            "You do not need to resolve every operating question at once, but identify which are now active and who will handle them. Mark this learning chapter complete when you have reviewed it; the final action below only previews a possible Q&A request."
          ]
        }
      ]
    }
  ]
};
