<template>
  <div class="schedule">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <Heading :obj="headingObj" />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="schedule-container">
        <div class="downs">
          <img style="box-shadow:none;" src="../assets/highlights.svg" alt />
          <div class="data">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FHighlights%20of%20the%20Conference%20(2).pdf?alt=media&token=0fde8eb2-072f-437e-82b0-43e8ed4e3083"
              target="_blank"
              class="btn"
              >Speaker Highlights</a
            >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FAbstract%20Book%20(1).pdf?alt=media&token=5e7989af-6399-4c82-9003-d02df566833e"
              target="_blank"
              class="btn"
              >Speaker Abstracts</a
            >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Research%20Papers%2FResearch%20Papers.zip?alt=media&token=767085fe-357b-4c11-bc56-59ed1888552d"
              target="_blank"
              class="btn"
              >Research Papers Download</a
            >
          </div>
        </div>
        <div class="pills-container" style="margin-top:1rem;">
          <div class="pills">
            <div @click="route(1)" class="pill" :class="{ active: page == 1 }">
              Aug 27th
            </div>
            <div @click="route(2)" class="pill" :class="{ active: page == 2 }">
              Aug 28th
            </div>
            <div @click="route(3)" class="pill" :class="{ active: page == 3 }">
              Aug 29th
            </div>
            <div @click="route(4)" class="pill" :class="{ active: page == 4 }">
              Aug 30th
            </div>
          </div>
        </div>

        <transition
          name="custom-classes-transition-2"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutRight"
          mode="out-in"
          :duration="{ leave: 450 }"
          appear
        >
          <div v-if="page == 1" class="day" key="1">
            <div class="sub-heading">
              <h2>First Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Opening Ceremony</h2>
                <h4></h4>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-28.jpg" alt />
              <div class="data">
                <h2>
                  The higher the altitude the less COVID-19: decreased
                  incidence, transmission capacity, and severity at altitude in
                  the American continent
                </h2>
                <div class="speaker">
                  <h4>Dr. Christian Arias Reyes,</h4>
                  <span>
                    Institut Universitaire de Cardiologie et de Pneumologie de
                    Québec- Université Laval, Québec Canada
                  </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-60.jpeg" alt />
              <div class="data">
                <h2>Karnataka Scenario epidemology of covid-19</h2>
                <div class="speaker">
                  <h4>V. Ravi,</h4>
                  <span>NIMHANS</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-35.jpg" alt />
              <div class="data">
                <h2>Covid in Colombia, University Hospital Experience</h2>
                <div class="speaker">
                  <h4>Dr. Milena Garcia</h4>
                  <span
                    >Pneumology Epidemiology Hospital San Ignacio - Universidad
                    Javeriana</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-33.jpg" alt />
              <div class="data">
                <h2>
                  Epidemiology of COVID-19 in the high altitude regions of Perú.
                </h2>
                <div class="speaker">
                  <h4>Dr. Walter Calderon,</h4>
                  <span>Intensivist, Seguro Social, Huancayo</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-58.jpg" alt />
              <div class="data">
                <h2>
                  Statistical analysis of COVID-19 and development of a
                  prediction formula
                </h2>
                <div class="speaker">
                  <h4>Dr. Robert Kuhnhenn,</h4>
                  <span>Family Medicine Physician</span>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <h2>Second Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-4.jpg" alt />
              <div class="data">
                <h2>
                  Telemedicine in remote places: how to reduce doctor-patient
                  contact during COVID-19 pandemic
                </h2>
                <div class="speaker">
                  <h4>Dr. Augusto Ittig,</h4>
                  <span>Director, Iberoamerican Network of Digital health</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Accupunture for COVID-19</h2>
                <div class="speaker">
                  <h4>ADr. A. Shaji Bharath,</h4>
                  <span
                    >M.Ac., MD (Acu)., PhD Senior Acupuncturist Founder of Dr.
                    Bharath’s Acu Heal</span
                  >
                </div>
              </div>
            </div>
            <!--<div class="event">
 <div class="data">
 <h2>Dharavi</h2> 
 <div class="speaker">
 <h4>Prof. Robert C. Gallo,</h4>
 <span>Director of the Institute of Human Virology (IHV), University of Maryland School of Medicine, Baltimore, Maryland</span>
 </div>
 <div class="timezones">
 <div class="ist">5:00pm-5:30pm IST,</div>
 <div class="est">7:30am-8:00am EST,</div>
 <div class="bst">12:30pm-1:00pm BST</div>
 </div>
 </div>
 </div> --->
            <div class="event">
              <img src="../assets/organizers/org-6.jpg" alt />
              <div class="data">
                <h2>Human Genome Project</h2>
                <div class="speaker">
                  <h4>Prof. Malali Gowda,</h4>
                  <span>Bengaluru Genomics Center, Bengaluru</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-51.jpg" alt />
              <div class="data">
                <h2>
                  Two Viruses, HIV and SARS CoV-2: Synergistic, Antagonistic or
                  Neutral ?
                </h2>
                <div class="speaker">
                  <h4>Prof. Gordon Dickinson,</h4>
                  <span>University of Miami Miller school of Medicine</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-57.jpg" alt />
              <div class="data">
                <h2>
                  Proteo-genomics analysis of SARS-CoV-2 to understand Covid-19
                  disease biology
                </h2>
                <div class="speaker">
                  <h4>Utpal Tatu</h4>
                  <span>Indian Institute of Science</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-26.jpg" />
              <div class="data">
                <h2>
                  Diversity and Evolution of Coronaviruses: Whole Genome and
                  Pan-genome Perspective
                </h2>
                <div class="speaker">
                  <h4>Gaurav Sharma,</h4>
                  <span>Indian Institute of Science</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Industry Session</h2>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-37.jpg" alt />
              <div class="data">
                <h2>
                  Lessons from the Past Pandemics; Implications for Arresting
                  Covid-19
                </h2>
                <div class="speaker">
                  <h4>Prof. Roberto C. Gallo,</h4>
                  <span>
                    Director of the Institute of Human Virology (IHV) University
                    of Maryland School of Medicine
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="page == 2" class="day" key="2">
            <div class="sub-heading">
              <h2>Third Session</h2>
              <div class="small-line"></div>
            </div>

            <div class="event">
              <img src="../assets/organizers/org-64.jpeg" alt />
              <div class="data">
                <h2>Sex differences in the mortality by COVID-19</h2>
                <div class="speaker">
                  <h4>Danuzia A. Marquez,</h4>
                  <span
                    >Institute Universitaire de Cardiologie et de Pneumologie
                    (IUCPQ), Faculty of Medicine, Université Laval, Québec,
                    Canada</span
                  >
                </div>
              </div>
            </div>

            <div class="event">
              <img src="../assets/organizers/org-15.jpg" alt />
              <div class="data">
                <h2>
                  SARS-Cov2 biophysical nature of Coronavirus, means of its
                  stability and susceptibility
                </h2>
                <div class="speaker">
                  <h4>Dr. Hamid Mobasheri,</h4>
                  <span>UNESCO, University of Tehran</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-11.jpg" alt />
              <div class="data">
                <h2>
                  Efectiveness of glucocorticoid pulses in the inflammatory
                  phase of COVID-19
                </h2>
                <div class="speaker">
                  <h4>Dr. Roberto Accinelli,</h4>
                  <span>Universidad Cayetano Heredia</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-2.jpg" alt />
              <div class="data">
                <h2>
                  Respiratory failure due to gas diffusion limitation
                  (Physiology)
                </h2>
                <div class="speaker">
                  <h4>Dr. Giuseppe Miserocchi,</h4>
                  <span
                    >Department of Medicine and Surgery, Università Milano
                    Bicocca, Milan</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-9.jpg" alt />
              <div class="data">
                <h2>
                  Pneumolysis and Silent Hypoxemia in COVID-19: A new concept
                </h2>
                <div class="speaker">
                  <h4>Prof. Dr. Gustavo Zubieta-Calleja,</h4>
                  <span
                    >High Altitude Pulmonary and Pathology Institute
                    (IPPA-HAPPI),</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-61.jpeg" alt />
              <div class="data">
                <h2>
                  Neurological and psychiatric presentations in COVID-19 and
                  neuroprotective treatment potential of recombinant human
                  erythropoietin
                </h2>
                <div class="speaker">
                  <h4>Martin Begemann,</h4>
                  <span>Max Planck Institute for Experimental Medicine</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-8.jpg" alt />
              <div class="data">
                <h2>Global life style changes during and post COVID 19</h2>
                <div class="speaker">
                  <h4>Dr. Thuppil Venkatesh,</h4>
                  <span>Foundation for Quality</span>
                </div>
              </div>
            </div>
            <div class="sub-heading">
              <h2>Fourth Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Cancer treatment in covid times Medical Oncologist</h2>
                <div class="speaker">
                  <h4>Dr Harish</h4>
                  <span></span>
                </div>
              </div>
            </div>
            <!--- <div class="event">
 <div class="data">
 <h2>Microbiome</h2>
 <div class="speaker">
 <h4></h4>
 <span></span>
 </div>
 <div class="timezones">
 <div class="ist">5:00pm-5:30pm IST,</div>
 <div class="est">7:30am-8:00am EST,</div>
 <div class="bst">12:30pm-1:00pm BST</div>
 </div>
 </div>
 </div>-->
            <div class="event">
              <!-- <img src="../assets/organizers/org-48.jpg" alt /> --->
              <div class="data">
                <h2>
                  PCR and CBNAAT based diagnostic methodology for COVID 19)
                  Diagnosis of COVID-19 Laboratory Perspectives
                </h2>
                <div class="speaker">
                  <h4>Dr. Manjunath</h4>
                  <span
                    >State Level Virus Research & Diagnostic Laboratory</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>
                  Lab parameters and COVID (CBC, CRP, Ferritin, D dimer, ABG
                  interpretation, ETC.,)
                </h2>
                <div class="speaker">
                  <h4>Dr. Asha Kiran</h4>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-62.jpg" alt />
              <div class="data">
                <h2>Chest CT findings in COVID -19 at very high altitude</h2>
                <div class="speaker">
                  <h4>Dr. Gabriela Urquieta</h4>
                  <span>Hospital Agramont, El Alto</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-12.jpg" alt />
              <div class="data">
                <h2>
                  Environment and COVID-19: A UNESCO COVID-19 Panel Review
                </h2>
                <div class="speaker">
                  <h4>Prof. Kusal Das</h4>
                  <span>UNESCO / BLDE University</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Poster Presentation</h2>
              </div>
            </div>
          </div>
          <div v-else-if="page == 3" class="day" key="3">
            <div class="sub-heading">
              <h2>Sixth Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-50.jpg" alt />
              <div class="data">
                <h2>
                  SARS-COV 2 spike protein predicted to form complexes with host
                  receptor protein orthologues from a broad range of mammals
                </h2>
                <div class="speaker">
                  <h4>Su Datt Lam,</h4>
                  <span
                    >Department of Applied Physics, Faculty of Science and
                    Technology, Universiti Kebangsaan Malaysia, Bangi, Selangor,
                    43600, Malaysia</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-24.jpg" alt />
              <div class="data">
                <h2>
                  Risks and Impact of Angiotensin Converting Enzyme inhibitors
                  or Angiotensin Receptor Blockers
                </h2>
                <div class="speaker">
                  <h4>Prof. Murray Epstein,</h4>
                  <span>
                    University of Miami, Miller School of Medicine, USA
                  </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-32.jpg" alt />
              <div class="data">
                <h2>
                  Host Response Mediators in COVID-19 infection - Is there a
                  protective effect of angiotensin II
                </h2>
                <div class="speaker">
                  <h4>Prof. Jim Russell,</h4>
                  <span>
                    Prof. of Med., University of British Columbia. Principal
                    investigator, Centre for Heart Lung Innovation,
                  </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-19.jpg" alt />
              <div class="data">
                <h2>Experience with Nitaxonazide in Ecuador</h2>
                <div class="speaker">
                  <h4>Dr. Byron Canelos-Estrella</h4>
                  <span>Ecuador</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-36.jpg" alt />
              <div class="data">
                <h2>
                  NIV ventilation & pronation maneuver and PaO2/FIO2 index at
                  very high altitude in COVID-19
                </h2>
                <div class="speaker">
                  <h4>Dr. Antonio Viruez,</h4>
                  <span> Hospital del Norte, El Alto Bolivia </span>
                </div>
              </div>
            </div>

            <div class="event">
              <img src="../assets/organizers/org-43.jpg" alt />
              <div class="data">
                <h2>Linking the obesity and COVID-19 pandemics</h2>
                <div class="speaker">
                  <h4>Dr.Lindsay Brown</h4>
                  <span>
                    University of Southern Queesland Toowoomba Australia
                  </span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>
                  PCR and CBNAAT based diagnostic method for COVID-19 Laboratory
                  Perspectives
                </h2>
                <div class="speaker">
                  <h4>Dr. Manjunath,</h4>
                  <span>NIMHANS</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-34.jpg" alt />
              <div class="data">
                <h2>
                  "Happy hypoxia" in COIVD-19: What we learned from CT perfusion
                </h2>
                <div class="speaker">
                  <h4>Dr. Paolo Pelosi</h4>
                  <span>
                    Anesthesia and Intensive Care San Martino Policlinico
                    Hospital University of Genoa, Italy
                  </span>
                </div>
              </div>
            </div>
            <div class="sub-heading">
              <h2>Sixth Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <div class="data">
                <h2></h2>
                <div class="speaker">
                  <h4>Dr. Farooque Motiwala</h4>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-52.jpg" alt />
              <div class="data">
                <h2>Neurological compromise in Covid-19</h2>
                <div class="speaker">
                  <h4>Dr. Mario Canitrot</h4>
                  <span> Head, NeuroICU INDISA Clinic Chile </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-54.jpg" alt />
              <div class="data">
                <h2>Ayurveda and COVID-19 : Research and Clinical Updates</h2>
                <div class="speaker">
                  <h4>Vaidya P. Rammanohar</h4>
                  <span
                    >Research Director, Amrita School of Ayurveda, Kollam,
                    Kerala</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>
                  Recovery from hypoxia through Re-purposed ayurveda medicine
                </h2>
                <div class="speaker">
                  <h4>Dr.Sudheer Ayyappan</h4>
                  <span>BAMS. MD Team Dhanvantari, Sreehareeyam Ayurveda</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-36.jpg" alt />
              <div class="data">
                <h2>COVID-19 during pregnancy at very high-altitude</h2>
                <div class="speaker">
                  <h4>Dr. Antonio Viruez,</h4>
                  <span
                    >Head of Critical Care Department, Hospital del Norte</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-55.jpg" alt />
              <div class="data">
                <h2>
                  Integration of Ayurveda in the management of critically ill
                  patients of covid 19 enables remarkable and quick recovery
                </h2>
                <div class="speaker">
                  <h4>Sanjay Jain,</h4>
                  <span>Dept. of Orthopaedics and traumatology</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-49.jpg" alt="mg" />
              <div class="data">
                <h2>Pediatrics and COVID-19</h2>
                <div class="speaker">
                  <h4>Dr.Christine Evert-Santos,</h4>
                  <span>USA</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Hackathon Winners Presentation</h2>
              </div>
            </div>
          </div>
          <div v-else-if="page == 4" class="day" key="4">
            <div class="sub-heading">
              <h2>Seventh Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Hackathon Winners Presentation</h2>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-40.jpg" alt="mg" />
              <div class="data">
                <h2>New Technologies of recent application in COVID</h2>
                <div class="speaker">
                  <h4>Dr. Alberto Lopez,</h4>
                  <span> Hospital Juarez Mexico </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-30.jpg" alt />
              <div class="data">
                <h2>
                  Management of severe pneumonia in COVID and the resulting
                  histology
                </h2>
                <div class="speaker">
                  <h4>Dr. Felipe Montelongo,</h4>
                  <span>
                    Professor Hospital General de Ecatepec Las Americas
                  </span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-16.jpg" alt />
              <div class="data">
                <h2>My concerns of Mexico - Covid</h2>
                <div class="speaker">
                  <h4>Dr. José Antonio Carmona,</h4>
                  <span> Intensivist Hospital Juarez Mexico </span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-10.jpg" alt />
              <div class="data">
                <h2>Treatment of COVID-19 in longterm facilities</h2>
                <div class="speaker">
                  <h4>Dr. Oscar Murillo,</h4>
                  <span>St. Luke’s University Hospital, Bethlehem, PA</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-25.jpg" alt />
              <div class="data">
                <h2>
                  The impact on high-flow nasal oxygen on the mortality of
                  respiratory failure secondary to COVID-19 pneumonia
                </h2>
                <div class="speaker">
                  <h4>Dr. Usha Lalla</h4>
                  <span>MBChB , MRCP(UK) , FCP (SA), MMed (Int)</span>
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-27.jpg" alt />
              <div class="data">
                <h2>
                  Creating systems for safe COVID airway management: The Groote
                  Schuur experience
                </h2>
                <div class="speaker">
                  <h4>Assoc. Prof. Ross Hofmeyr,</h4>
                  <span
                    >MBChB (Stell), DipPEC, DA (SA), MMed (Anaes) (UCT), FCA
                    (SA), FAWM (WMS)</span
                  >
                </div>
              </div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-46.jpg" alt="mg" />
              <div class="data">
                <h2>
                  Evidence and feasibility of prone positioning in COVID - 19: a
                  resource challenged perspective
                </h2>
                <div class="speaker">
                  <h4>Dr. Clint Hendrikse,</h4>
                  <span>
                    Lecturer and Joint staff , Division of Emergency Medicine,
                    University of Cape Town, South Africa
                  </span>
                </div>
              </div>
            </div>
            <div class="sub-heading">
              <h2>Eight Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-35.jpg" alt />
              <div class="data">
                <h2>Covid in Colombia</h2>
                <div class="speaker">
                  <h4>Dr. Milena Garcia</h4>
                  <span>Pneumology Epidemiology, Hospital San Ignacio</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>New Diagnostic tests for COVID-19</h2>
                <div class="speaker">
                  <h4>Dr. Sumanta Goswami</h4>
                  <span
                    >Associate Professor of Structural Biology at Albert
                    Einstein College of Medicine</span
                  >
                </div>
              </div>
            </div>

            <div class="event">
              <img src="../assets/organizers/org-31.jpg" alt />
              <div class="data">
                <h2>COVID-19 Vaccines</h2>
                <div class="speaker">
                  <h4>Prof. Andrew Pollard,</h4>
                  <span>Oxford University</span>
                </div>
              </div>
            </div>
            <div class="event break">
              <div class="data">Break</div>
            </div>
            <div class="event">
              <img src="../assets/organizers/org-56.jpg" alt="mg" />
              <div class="data">
                <h2>
                  Creating teams for Indian viral sequences based nucleic acid
                  vaccine systems
                </h2>
                <div class="speaker">
                  <h4>Dr. Sudhir Krishna</h4>
                  <span>NCBS, TIFR, Bengaluru</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Nanotechnology, CRISPR Cas-9, Stem Cell Therapy</h2>
                <div class="speaker">
                  <h4></h4>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="sub-heading">
              <h2>Special Session</h2>
              <div class="small-line"></div>
            </div>
            <div class="event-special">
              <div class="new-data">
                <img src="../assets/organizers/special1.jpeg" alt="special" />
                <img src="../assets/organizers/special2.jpeg" alt="special" />
                <div class="deets">
                  <h1>
                    Contention, Mitigation, Recovery and Post-Lockdown plans in
                    response to COVID in Bolivia
                  </h1>
                  <h4 style="margin-bottom: 0.3rem">
                    Dr. Eidy Roca De Sangueza
                  </h4>
                  <span style="margin-top: 0">Minister of Health, Bolivia</span>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Brainstorming Session</h2>
              </div>
            </div>
            <div class="event">
              <div class="data">
                <h2>Closing Ceremony</h2>
              </div>
            </div>
          </div>
        </transition>
        <div class="download-container">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2F28th%20%20(1).xlsx?alt=media&token=084c2efa-62ff-45bf-b6b2-35708195337d"
            target="_blank"
            class="btn"
            >Download Program</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Heading from "../components/Heading";
export default {
  components: {
    Heading
  },
  data() {
    return {
      page: 1,
      headingObj: {
        h1: "Highlights",
        h4: "Highlights of the 2nd World Conference",
        src: "calendar.svg"
      }
    };
  },
  methods: {
    route(page) {
      this.page = page;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.schedule {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .schedule-container,
  .day {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .pills-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      @include iphone {
        justify-content: center;
      }
      .pills {
        width: 100%;
        border-radius: 0.8rem;
        padding: 0.8rem 0;
        background: rgba(lighten($primary, 30%), 0.3);
        display: flex;
        justify-content: space-around;
        align-items: center;
        @include ipad-portrait {
          width: 100%;
        }
        @include iphone {
          width: 100%;
          flex-wrap: wrap;
        }
        .pill {
          padding: 0.7rem 2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease-in;
          @include iphone {
            margin: 0.5rem 0;
          }
        }
        .pill:hover {
          background: rgba($primary, 0.2);
        }
        .active {
          background: $primary;
          color: white;
          box-shadow: 5px 8px 7px rgba(0, 0, 0, 0.25);
        }
        .active:hover {
          background: $primary;
          color: white;
        }
      }
    }
    .sub-heading {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem;
      h2 {
        font-weight: lighter;
        font-size: xx-large;
        margin-bottom: 0;
      }
      .small-line {
        width: 100%;
        height: 1px;
        margin: 0.8rem 0;
        background: lightgray;
      }
    }
    .downs {
      margin: 0.6rem 0;

      width: 98%;
      padding: 0rem 2rem;
      display: flex;
      justify-content: flex-start;
      // flex-direction: column;
      align-items: center;
      background: rgba($primary, 0.2);
      //box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
      padding: 0.5rem 2rem;
      border-radius: 0.8rem;
      .data {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin: 0 1rem;
        @include ipad {
          flex-wrap: wrap;
        }
        @include iphone {
          padding-bottom: 2rem;
        }
        .btn {
          background: $primary;
        }
      }
      @include iphone {
        flex-wrap: wrap;
        justify-content: center;
        padding: 0.5rem;
      }
      img {
        width: 280px;
        height: 280px;
        border-radius: 0.5rem;
        margin: 0rem 2rem;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        @include iphone {
          width: 240px;
          height: 240px;
        }
      }
    }
    .event {
      margin: 0.6rem 0;
      width: 98%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: rgba($primary, 0.2);
      //box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
      padding: 0.5rem 2rem;
      border-radius: 0.8rem;
      @include iphone {
        flex-wrap: wrap;
        justify-content: center;
        padding: 0.5rem;
      }
      img {
        width: 140px;
        height: 140px;
        border-radius: 0.5rem;
        margin: 1rem 0;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
      }
      .data {
        width: 100%;
        padding: 0 0.5rem 0 2rem;
        h2 {
          color: darken($primary, 15%);
        }
        .speaker {
          display: flex;
          align-items: center;
          h4 {
            margin: 0;
            margin-right: 0.4rem;
          }
        }
        .timezones {
          width: 100%;
          margin: 1.5rem 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          @include iphone {
            flex-wrap: wrap;
          }
          .bst,
          .est,
          .ist {
            margin-right: 0.7rem;
            @include iphone {
              margin: 0.5rem 0;
            }
          }
          .ist {
            color: darken(red, 5%);
          }
          .est {
            color: #1c8d76;
          }
          .bst {
            color: midnightblue;
          }
        }
      }
    }
    .event-special {
      margin: 0.6rem 0;
      width: 98%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgba($primary, 0.2);
      padding: 0.5rem 2rem;
      border-radius: 0.8rem;
      @include iphone {
        flex-wrap: wrap;
        justify-content: center;
      }
      .new-data {
        width: 98%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include ipad {
          flex-wrap: wrap;
          justify-content: center;
        }
        @include iphone {
          flex-wrap: wrap-reverse;
          justify-content: center;
          padding: 0.5rem;
        }
        img {
          width: 21rem;
          height: 17rem;
          margin: 1rem 2rem 1rem 0;
          @include iphone {
            margin: 1rem 0;
            width: 17rem;
            height: 13rem;
          }
        }
        .deets {
          h1 {
            color: darken($primary, 15%);
          }
        }
      }
      .timezones {
        width: 100%;
        margin: 1.5rem 0 1.5rem 3rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include iphone {
          flex-wrap: wrap;
          margin: 1.5rem 0;
        }
        .bst,
        .est,
        .ist {
          margin-right: 0.7rem;
          @include iphone {
            margin: 0.5rem 0;
          }
        }
        .ist {
          color: darken(red, 5%);
        }
        .est {
          color: #1c8d76;
        }
        .bst {
          color: midnightblue;
        }
      }
    }
    .break {
      background: rgba(red, 0.3);
      justify-content: center;
      box-shadow: none;
      border-radius: 0;
      .data {
        padding: 0;
        font-weight: bold;
      }
    }
    .download-container {
      width: 100%;
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .legend {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include iphone {
        flex-wrap: wrap;
        margin: 0.5rem;
      }
      div {
        margin: 1.8rem 0.3rem;
        margin-bottom: 0;
      }
    }
  }
  .btn {
    padding: 1rem 2rem;
    background: $gradient;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
  }
  .btn:active {
    transform: scale(0.95);
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>

