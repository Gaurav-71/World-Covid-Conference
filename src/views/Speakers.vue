<template>
  <div class="final-speakers">
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
      <div class="speaker-container">
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-4.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/argentina.png" alt="flag" />
              <span>Argentina</span>
            </div>
            <h3>Dr. Augusto Ittig</h3>
            <h4>Director, Iberoamerican Network of Digital health</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-43.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/australia.png" alt="flag" />
              <span>Australia</span>
            </div>
            <h3>Dr. Lindsay Brown</h3>
            <h4>University of Southern Queensland Toowoomba</h4>
          </div>
        </div>

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-59.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/austria.png" alt="flag" />
              <span>Austria</span>
            </div>
            <h3>Prof. Thomas Binder,</h3>
            <h4>Cardiologist Vienna General Hospital</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-9.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Prof. Gustavo Zubieta</h3>
            <h4>Head, High Altitude Pulmonary and Pathology Institute</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FProf.%20Gustavo%20Abstract.docx?alt=media&token=4b6aaece-e377-436d-b7bf-5b0a92d49cd3"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-62.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Dr. Gabriela Elva Urquieta</h3>
            <h4>Hospital Agramont, El Alto</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-36.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Antonio Viruez</h3>
            <h4>Hospital Del Norte, El Alto</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-32.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Prof. Jim Russel</h3>
            <h4>Prof. of Med., University of British Columbia</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Frussel%20abstract.docx?alt=media&token=b7e64290-5eea-4cfe-81d6-487bf0ff3460"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-64.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Danuzia A. Marquez</h3>
            <h4>Institut Universitaire de Cardiologie, Université Laval</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-28.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Dr. Christian Arias Reyes</h3>
            <h4>Institut Universitaire de Cardiologie, Université Laval</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FAbstract_Arias_Reyes.docx?alt=media&token=e12723a1-10eb-4c0a-a83f-6708ff4c285f"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-52.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/chile.png" alt="flag" />
              <span>Chile</span>
            </div>
            <h3>Dr. Mario Canitrot</h3>
            <h4>Head NeuroICU INDISA Clinic</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-35.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/colombia.png" alt="flag" />
              <span>Colombia</span>
            </div>
            <h3>Dr. Milena Garcia</h3>
            <h4>Pneumology Epidemiology Hospital, Universidad Javeriana</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-19.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/ecuador.png" alt="flag" />
              <span>Ecuador</span>
            </div>
            <h3>Byron Canelos Estrella</h3>
            <h4>Pulmonologist, Hospital Metropolitano</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-44.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/ethiopia.png" alt="flag" />
              <span>Ethiopia</span>
            </div>
            <h3>Dr. Girma Ababi</h3>
            <h4>LIYANA Healthcare, Vice President for the National Ethiopian Private Health Sector</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-61.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/germany.png" alt="flag" />
              <span>Germany</span>
            </div>
            <h3>Martin Begemann</h3>
            <h4>Max Planck Institute for Experimental Medicine</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fmartin%20abstract.docx?alt=media&token=a0ee1bff-f8d8-4b7f-a38a-af17834e639c"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-6.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Malali Gowda</h3>
            <h4>Head, Bengaluru Genomics Center</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-63.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Prachi Parvatikar</h3>
            <h4>Dept of Physiology, BLDE University</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-60.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>V. Ravi</h3>
            <h4>National Institute of Mental Health and Neuro-Science</h4>
          </div>
        </div>

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-57.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Utpal Tatu</h3>
            <h4>Indian Institute of Science</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Futpal%20tatu%20abstract.docx?alt=media&token=0458f662-c9f9-41fb-995e-24670e3bbee8"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-48.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Sathyanarayan M.S.</h3>
            <h4>State Level Virus Research & Diagnostic Laboratory</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-45.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Chitra Phatabiraman</h3>
            <h4>National Institute of Mental Health and Neuro-Sciences</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-8.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Venkatesh Thuppil</h3>
            <h4>Foundation for Quality India</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fthuppil%20ventakesh%20abstarct.docx?alt=media&token=5216f147-f537-4cb6-bee9-29f323962096"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-26.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Gaurav Sharma</h3>
            <h4>Institute of Bioinformatics and Applied Biotechnology</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fgourav%20sharma%20abstract.pdf?alt=media&token=19629fb3-3d17-4675-8e99-d6a3d8977858"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-54.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Vaidya P. Rammanohar</h3>
            <h4>Research Director, Amrita School of Ayurveda, Kollam, Kerala</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fram%20monohar%20abstract.docx?alt=media&token=5c03e9cf-679d-46b0-a7ce-e92a2d529e3a"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-55.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Sanjay Jain</h3>
            <h4>Dept. of Orthopaedics and Traumatology</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fabstract%20sanjay%20jain.docx?alt=media&token=217e1759-624f-4c19-be2c-023b8cdf781a"
            target="_blank"
          >View Abstract</a>
        </div>

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-12.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Kushal Das</h3>
            <h4>BLDE, UNESCO Academic Leader & Coordinator</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FDr.%20kusal%20Das.ABSTRACT.docx?alt=media&token=213c21ff-999b-40bf-8145-00e85289e5b2"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-53.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Meera Sudheer</h3>
            <h4>BAMS. MD team dhanvantari, shreehareeyam ayurveda</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fmeera%20abstract.JPG?alt=media&token=43c07d90-13c7-42c7-bae5-37f99d12ebdf"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-29.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Imtiyaz Hassan</h3>
            <h4>Assistant Professor, Centre for Interdisciplinary Research in Basic Sciences</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fimtiyaz%20ali%20abstract.pptx?alt=media&token=2a816ec0-9afb-466b-bd74-e75a103cae07"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-56.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Sudhir Krishna</h3>
            <h4>NCBS, TIFR</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fsudhir%20abstract.docx?alt=media&token=02f71406-5812-437c-a526-d724d5df03be"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-15.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/iran.png" alt="flag" />
              <span>Iran</span>
            </div>
            <h3>Prof. Hamid Mobasheri</h3>
            <h4>Institute of Biochemistry and Biophysics, University of Tehran, Iran, UNESCO Intetacadrmic Partnership (AP)</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FH.%20Mobasheri%20(Abstract%20for%202nd%20World%20Conference%20on%20Advances%20in%20Covid-19%2C%20Aug.%2027-30%2C%202020).docx?alt=media&token=9e0228e7-9c99-4d01-b639-91e99617034b"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-2.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/italy.png" alt="flag" />
              <span>Italy</span>
            </div>
            <h3>Dr. Giuseppe Miserocchi</h3>
            <h4>Universita Milano Biccoca</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-34.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/italy.png" alt="flag" />
              <span>Italy</span>
            </div>
            <h3>Dr. Paolo Pelosi</h3>
            <h4>University of Genoa</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fpelosi%20abstract.docx?alt=media&token=ea5816de-af95-40bb-b311-80165759e9b1"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-50.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/malaysia.png" alt="flag" />
              <span>Malaysia</span>
            </div>
            <h3>Su Datt Lam</h3>
            <h4>Department of Applied Physics, Faculty of Science and Technology</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Flam%20abstract.JPG?alt=media&token=78ced7de-9030-462a-a9b8-3a6fee524956"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-16.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Jose Antonio Carmona</h3>
            <h4>Hospital Juarez</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-40.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Alberto Lopez</h3>
            <h4>Hospital Juarez</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-30.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Felipe Montelongo</h3>
            <h4>Intensivist, Hospital General de Ecatepec Las Americas</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-11.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Dr. Roberto Accinelli</h3>
            <h4>Director, Universidad Cayetano Heredia</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-33.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Walter Calderon</h3>
            <h4>Intensivist, Seguro Social, Huancayo</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-27.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Prof. Ross Hofmeyr</h3>
            <h4>Associate Professor, University of Cape Town, and WildMedix</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FAbstract%20Assoc.%20Prof.%20Ross%20Hofmeyr.pdf?alt=media&token=ee61a342-60a8-4ee6-99a5-08188d5ae357"
            target="_blank"
            class="abstract"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-46.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Dr. Clint Hendrikse</h3>
            <h4>Lecturer and Joint staff, Division of Emergency Medicine, University of Cape Town</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fclint%20hendrikse%20abstract.pdf?alt=media&token=7d096f63-87c2-4c2e-b761-5ecdf4e05bd9"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-25.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Dr. Usha Lalla</h3>
            <h4>Head of Tygerberg Hospital ICU</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FBiosketch_Lalla.pdf?alt=media&token=ade2a772-7d7f-48f2-8622-09c1c2b9d113"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-31.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/uk.png" alt="flag" />
              <span>UK</span>
            </div>
            <h3>Andrew Pollard</h3>
            <h4>Oxford University</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fandrew%20pollard%20abstract.docx?alt=media&token=bac8fb3a-d548-4022-ac33-c2bf5df5a380"
            target="_blank"
          >View Abstract</a>
        </div>

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-24.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Murray Epstein</h3>
            <h4>Professor of Medicine, University of Miami Miller School of Medicine</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fmurray%20Abstract.docx?alt=media&token=9fdae49e-9451-424f-836a-57387c26c90f"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-10.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Oscar Murillo</h3>
            <h4>St. Lukes University</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-47.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Prof. Susanne Doblecki-Lewis</h3>
            <h4>Associate Professor of Clinical Medicine</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-37.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Robert Gallo</h3>
            <h4>Director of the Institute of Human Virology</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fgallo%20abstract.JPG?alt=media&token=1e401094-9e3d-4ada-bab7-da7f0c77b1b9"
            target="_blank"
          >View Abstract</a>
        </div>

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-49.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Christine Ebert-Santos</h3>
            <h4>Head, Ebert Family Clinic</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fchristine%20ebert%20santos%20abstract.docx?alt=media&token=e6f2552d-14d2-42ec-a853-9ba879587ab9"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-58.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Robert Kuhnhenn</h3>
            <h4>Family Medicine Physician</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2FStatistical%20Analysis%20of%20COVID-19.pdf?alt=media&token=438c5284-184d-47e9-9287-5c8af56695d5"
            target="_blank"
          >View Abstract</a>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-51.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Prof. Gordon Dickinson</h3>
            <h4>University of Miami Miller School of Medicine</h4>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/Abstracts%2Fdickinson%20abstract.docx?alt=media&token=1bc8c5c4-f9b5-4bed-ad68-2f8db22b6e90"
            target="_blank"
          >View Abstract</a>
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
      headingObj: {
        h1: "Speakers",
        h4:
          "List of all the prestigious speakers presenting at our conference ordered by country",
        src: "presentation.svg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.final-speakers {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  .speaker-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      width: 16rem;
      height: 28rem;
      margin: 1.5rem;
      display: grid;
      grid-template-rows: 16rem 10rem;
      border-radius: 0.8rem;
      background: white;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      background-image: $gradient;
      .img-cont {
        overflow: hidden;
        //background-image: $gradient;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 16rem;
          height: 16rem;
        }
        .svg {
          width: 120px;
          height: 120px;
        }
      }
      .body {
        height: 100%;
        background: rgba(black, 0.5);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0.5rem;
        .country {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            margin: 0 0.5rem;
            color: lighten($primary, 20%);
          }
        }
        h3,
        h4 {
          margin: 0;
          font-weight: lighter;
          color: lighten($primary, 20%);
        }
        h3 {
          font-weight: bold;
          padding: 0.5rem;
          margin: 0;
          color: white;
        }
      }
      a {
        width: 100%;
        text-align: center;
        color: white;
        padding: 0.3rem 0;
        text-decoration: none;
      }
      a:hover {
        color: lighten($primary, 20%);
      }
    }
  }
}
</style>