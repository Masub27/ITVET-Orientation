<!--

author:   Masub Makhdoom
email:    masub.makhdoom@ovgu.de
date:     27/01/2026
version:  30.0.0
language: en
narrator: UK English Female

repository: https://github.com/LiaScript/docs

logo:     img/logo.png

comment:  This document shall provide an entire compendium and course on the
          development of Open-courSes with [LiaScript](https://LiaScript.github.io).
          As the language and the systems grows, also this document will be updated.
          Feel free to fork or copy it, translations are very welcome...

script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js
          https://felixhao28.github.io/JSCPP/dist/JSCPP.es5.min.js

link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css

link: https://raw.githubusercontent.com/OVGU-VET-TechEd/Integrating_AI_in_TVET_UNESCO/refs/heads/main/VorlageUN.css

link:     https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css

import:   https://raw.githubusercontent.com/liaTemplates/ABCjs/main/README.md

link:     https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs
          https://fonts.googleapis.com/css2?family=Noto+Sans+Ogham

font:     Noto Sans Egyptian Hieroglyphs, Noto Sans Ogham

-->

# Orientation for ITVET Study Programme

<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="420" viewBox="0 0 800 450">

  <!-- Background -->
  <rect width="800" height="450" fill="#1A237E"/>

  <!-- White container -->
  <rect x="60" y="70" width="680" height="310" rx="24" fill="white"/>

  <!-- Accent line -->
  <rect x="150" y="120" width="500" height="5" rx="3" fill="#1A237E"/>

  <!-- Text block -->
  <foreignObject x="120" y="150" width="560" height="200">
    <div xmlns="http://www.w3.org/1999/xhtml"
         style="font-family:'Segoe UI', Arial, sans-serif; text-align:center; color:#1A237E;">
      
      <div style="font-size:18px; font-weight:600; letter-spacing:1px; margin-bottom:16px;">
        Welcome to the Master's Programme
      </div>

      <div style="font-size:28px; font-weight:700; line-height:1.4; margin-bottom:14px;">
        International Technical and Vocational<br/>
        Education and Training
      </div>

      <div style="font-size:16px; color:#444;">
        Orientation guide for new ITVET students
      </div>

    </div>
  </foreignObject>

</svg>



## 🤖 ITVET Smart Orientation Chatbot 



<div style="max-width:1000px;margin:24px auto;padding:20px;border-radius:24px;background:linear-gradient(135deg,#eef2ff,#f8fafc);border:1px solid #dbe4ff;font-family:Arial,sans-serif;box-shadow:0 10px 28px rgba(0,0,0,.08);">

  <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
    <div style="width:74px;height:74px;border-radius:50%;background:linear-gradient(135deg,#1A237E,#3949ab);display:flex;align-items:center;justify-content:center;color:white;font-size:34px;box-shadow:0 6px 18px rgba(26,35,126,.35);">
      🎓
    </div>
    <div>
      <div style="font-size:25px;font-weight:700;color:#1A237E;">ITVET Orientation Assistant</div>
      <div style="font-size:14px;color:#5b6475;">Chatbot for ITVET students</div>
    </div>
  </div>

  <div id="chatbox2" style="height:380px;overflow-y:auto;background:white;border:1px solid #e2e8f0;border-radius:18px;padding:16px;margin-bottom:14px;">
    <div style="display:flex;margin-bottom:12px;">
      <div style="max-width:82%;background:#e8edff;border-radius:16px 16px 16px 4px;padding:12px 14px;color:#0f172a;line-height:1.5;">
        <b style="color:#1A237E;">ITVET Bot</b><br>
        Hello! Ask me about registration, visa extension, student card, myOVGU, eLearning, timetable, modules, thesis, assistants, or the programme coordinator.
      </div>
    </div>
  </div>

  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
    <button type="button" onclick="quickAsk2('city registration')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">City Registration</button>
    <button type="button" onclick="quickAsk2('visa extension')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Visa</button>
    <button type="button" onclick="quickAsk2('myovgu')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">myOVGU</button>
    <button type="button" onclick="quickAsk2('modules')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Modules</button>
    <button type="button" onclick="quickAsk2('timetable')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Timetable</button>
    <button type="button" onclick="quickAsk2('thesis')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Thesis</button>
    <button type="button" onclick="quickAsk2('who are assistant')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Assistants</button>
    <button type="button" onclick="quickAsk2('who is program coordinator')" style="padding:10px 14px;border:none;border-radius:12px;background:#2338a5;color:white;cursor:pointer;">Coordinator</button>
  </div>

  <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
    <input id="chatInput2" type="text" placeholder="Type your question here..." style="flex:1;min-width:260px;padding:14px;border:1px solid #cbd5e1;border-radius:16px;font-size:16px;background:#fff;">
    <button type="button" onclick="sendChat2()" style="padding:14px 18px;border:none;border-radius:16px;background:#0f172a;color:white;cursor:pointer;font-weight:600;">Send</button>
  </div>

  <div style="margin-top:10px;font-size:13px;color:#64748b;">
    Try: <b>Who are assistant?</b>, <b>Who is program coordinator?</b>, <b>What is module 4?</b>, <b>How do I extend my visa?</b>
  </div>
</div>

<script run-once>
const knowledge2 = [
  {
    keys: ["who is program coordinator", "programme coordinator", "program coordinator", "who coordinates the programme", "who is coordinator"],
    answer: "The programme coordinator mentioned in the orientation guide is <b>Dr. Yuliya Nepomyashcha</b>.<br><br>Contact:<br>yuliya.nepomyashcha@ovgu.de<br>Phone: 0391-67-56369"
  },
  {
    keys: ["who are assistant", "who are assistants", "research assistants", "who are the research assistants", "assistants"],
    answer: "The research assistants listed in the orientation guide are:<br><br><b>Mahwish Kanwal</b><br>mahwish.kanwal@ovgu.de<br>Phone: 0176 70340091<br><br><b>Masub Makhdoom</b><br>masub.makhdoom@ovgu.de<br>Phone: 01727098714"
  },
  {
    keys: ["contacts", "contact persons", "itvet contacts"],
    answer: "ITVET contact persons:<br><br><b>Dr. Yuliya Nepomyashcha</b><br>yuliya.nepomyashcha@ovgu.de<br>0391-67-56369<br><br><b>Mahwish Kanwal</b><br>mahwish.kanwal@ovgu.de<br>0176 70340091<br><br><b>Masub Makhdoom</b><br>masub.makhdoom@ovgu.de<br>01727098714"
  },
  {
    keys: ["city registration", "burgerburo", "register address", "address registration"],
    answer: "You must register your address at the Bürgerbüro in Magdeburg.<br><br>Appointment booking:<br>https://terminvergabe.magdeburg.de/select2?md=2<br><br>You will receive a registration certificate that must be submitted to the OVGU enrolment office."
  },
  {
    keys: ["enrolment office", "inform enrolment office", "registration certificate"],
    answer: "You must notify the Enrolment Office about:<br>• your residential address<br>• the registration certificate from Bürgerbüro<br>• your visa extension"
  },
  {
    keys: ["student card", "student id", "student id card"],
    answer: "After submitting your address, your student ID card will be sent by post.<br><br>You must validate it at:<br>• Campus Service Center<br>• Building 6<br>• Building 10<br>• Building 40<br>• University Library"
  },
  {
    keys: ["validate card", "validate student card", "student card validation"],
    answer: "Student cards can be validated at Campus Service Center, Building 6, Building 10, Building 40, and the University Library."
  },
  {
    keys: ["visa", "visa extension", "extend visa", "foreigner office"],
    answer: "To extend your visa you must visit the Foreigner's Registration Office (Ausländerbehörde).<br><br>Information page:<br>https://www.ovgu.de/unimagdeburg/en/International/Incoming+_+Ways+to+the+University/International+Students/Organizing+Your+Stay/Foreigners_+Office-p-54296.html"
  },
  {
    keys: ["myovgu", "portal", "student portal"],
    answer: "myOVGU is the student portal where you can:<br>• check enrolment status<br>• download study certificates<br>• update personal information<br>• view reports<br><br>Portal link:<br>https://myovgu.ovgu.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces"
  },
  {
    keys: ["blocked", "blocked status", "portal blocked"],
    answer: "Common reasons for blocking are:<br>• missing insurance confirmation<br>• missing residential address<br>• unpaid tuition fees"
  },
  {
    keys: ["m10", "insurance status report", "missing insurance"],
    answer: "If the insurance status report M10 is missing, send it to:<br><b>enrolment@ovgu.de</b>"
  },
  {
    keys: ["webmail", "university email", "ovgu webmail"],
    answer: "OVGU Webmail is the official university email system.<br><br>Login:<br>https://webmail.ovgu.de/stable/<br><br>All official communication from the university will be sent there."
  },
  {
    keys: ["university account", "activate account", "ovgu account"],
    answer: "You must activate your OVGU account here:<br>https://wext.ovgu.de/selfservice/terminal/user_anm.php<br><br>This account gives access to:<br>• campus internet<br>• OVGU webmail<br>• myOVGU portal<br>• library services"
  },
  {
    keys: ["elearning", "course registration", "elearning registration"],
    answer: "Registration for courses on eLearning is mandatory for all students.<br><br>Platform:<br>https://elearning.ovgu.de/<br><br>You must create your university account before using eLearning."
  },
  {
    keys: ["semester ticket", "deutschland ticket", "transport ticket"],
    answer: "The Deutschlandsemesterticket is valid across Germany on public transport.<br><br>It is NOT valid for:<br>• ICE<br>• IC<br>• EC trains"
  },
  {
    keys: ["study regulations", "regulations", "study and examination regulations"],
    answer: "The course provides study and examination regulations in German and English, as well as the module manual, internship regulations, and fee schedule."
  },
  {
    keys: ["certificate", "certificate of enrolment", "study certificate"],
    answer: "The certificate of enrolment is not sent by post or email.<br><br>You must download it yourself from:<br><b>myOVGU → Reports section → Students tab</b>"
  },
  {
    keys: ["consultation", "consultation hours"],
    answer: "ITVET consultation hours:<br><br>Day: Monday<br>Time: 9:00 am – 10:00 am<br>Date range: 13.04.2026 – 06.07.2026<br>Platform: LSF"
  },
  {
    keys: ["timetable", "course timetable", "schedule"],
    answer: "The ITVET course timetable is available in the LSF system.<br><br>You can also find linked eLearning course pages in the orientation guide.<br><br>Try asking about:<br>• consultation hours<br>• module 4<br>• module 5<br>• module 6<br>• module 7<br>• master colloquium"
  },
  {
    keys: ["modules", "itvet modules", "all modules"],
    answer: "The ITVET programme contains 8 main modules:<br><br>1. Didactics and Methodology<br>2. Structures and Theories<br>3. Didactics of Vocational Learning and Teaching<br>4. International Comparative TVET<br>5. Management and Evaluation<br>6. Curriculum and Media Development<br>7. Professional Practical Studies<br>8. Master Thesis"
  },
  {
    keys: ["module 1"],
    answer: "Module 1: Didactics and Methodology of Technical and Vocational Education and Training<br><br>Courses:<br>• Didactics and Learning Theories in Vocational Education and Training (6 CP)<br>• Development of Learning and Teaching Media in Vocational Education (4 CP)<br><br>Semester: WiSe"
  },
  {
    keys: ["module 2"],
    answer: "Module 2: Structures and Theories of Technical and Vocational Education and Training<br><br>Courses:<br>• Structures and Theories of Vocational Education (4 CP)<br>• Focus Seminar for Vocational Education (6 CP)<br><br>Semester: WiSe"
  },
  {
    keys: ["module 3"],
    answer: "Module 3: Didactics of Vocational Learning and Teaching<br><br>Courses:<br>• Learning and Teaching Technologies in Practice (4 CP)<br>• Basics on Didactics for Specialisation (6 CP)<br><br>Semester: WiSe"
  },
  {
    keys: ["module 4", "international vocational education"],
    answer: "Module 4: International Comparative Technical and Vocational Education and Training<br><br>Courses:<br>• International Vocational Education I (4 CP)<br>• International Vocational Education II (6 CP)<br><br>Lecturer: Ms Idadze<br><br>Semester: SoSe"
  },
  {
    keys: ["module 5"],
    answer: "Module 5: Management and Evaluation of International Technical and Vocational Education and Training<br><br>Courses:<br>• Vocational Education Management (4 CP)<br>• Quality Management (6 CP)<br><br>Lecturers:<br>• Dr. Alamsyah / Moh Sanni Mufti<br>• Robert Kollenbaum<br><br>Semester: SoSe"
  },
  {
    keys: ["module 6"],
    answer: "Module 6: Curriculum and Media Development<br><br>Courses:<br>• Development of Curricula (4 CP)<br>• Action Fields of TVET Trainers (6 CP)<br><br>Lecturers:<br>• Eman Aboelgoud<br>• Lutz Thelen<br><br>Semester: SoSe"
  },
  {
    keys: ["module 7", "practical studies"],
    answer: "Module 7: Professional Practical Studies<br><br>Includes:<br>• Practical Studies<br>• Internship<br><br>Practical Studies schedule:<br>Monday<br>10:00 am – 11:30 am<br>13.04.2026 – 06.07.2026"
  },
  {
    keys: ["module 8", "master colloquium"],
    answer: "Module 8: Master Thesis<br><br>Includes:<br>• ITVET Master Colloquium (20 CP)<br><br>Lecturer: Lina Lockau<br>Schedule: Wednesday, 9:00 am – 12:00 pm<br>Dates: 06.05.2026 – 08.07.2026"
  },
  {
    keys: ["research methods", "qualitative research", "academic writing"],
    answer: "Research Methods module includes:<br>• Qualitative Research Methods (4 CP)<br>• Quantitative Research Methods (4 CP)<br>• Introduction in Research and Academic Writing (6 CP)<br><br>Lecturers include:<br>• Prof. Erika Gericke<br>• Mahwish Kanwal<br>• Lina Lockau"
  },
  {
    keys: ["ai in tvet", "ai module"],
    answer: "WP Module 4.2: AI in TVET<br><br>Courses:<br>• AI in TVET I – Foundations and Applications (4 CP)<br>• AI in TVET II – AI and Professional Development (6 CP)<br><br>Lecturers:<br>• Hannes Tegelbeckers<br>• Mahwish Kanwal<br>• Masub Makhdoom"
  },
  {
    keys: ["online school management", "educational blogger"],
    answer: "WP Module 4.3: Methodology of Online School Management and Educational Blogger<br><br>Courses:<br>• Methodology and Trends of Online School Management (4 CP)<br>• A Paradigm Shift in Teaching: From Educator to Educational Blogger (6 CP)<br><br>Lecturer: Dr. Olena Karpova"
  },
  {
    keys: ["thesis", "master thesis", "thesis requirements"],
    answer: "Master thesis requirements:<br>• supervisor approval<br>• tuition fees paid<br>• at least 75 CP<br><br>Processing time: 6 months<br><br>Submission:<br>• 2 printed copies<br>• 1 PDF<br><br>A thesis defense is NOT required."
  },
  {
    keys: ["thesis supervisor", "who supervises thesis", "supervisor"],
    answer: "Primary reviewer:<br>Prof. Dr. Bünning<br><br>Possible supervisors:<br>• Dr. Yuliya Nepomyashcha (qualitative research)<br>• Lina Lockau (qualitative research)<br>• Hannes Tegelbeckers (quantitative research)"
  },
  {
    keys: ["thesis process", "register thesis", "thesis registration"],
    answer: "Steps for thesis registration:<br>1. Start thinking about your topic early<br>2. Prepare a scientific exposé<br>3. Find a supervisor<br>4. Fill out and sign the registration form<br>5. Submit the form to the Examination Office<br><br>After submission, you receive a confirmation."
  }
];

function addMessage2(sender, text, isUser) {
  var box = document.getElementById("chatbox2");
  var wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.marginBottom = "12px";
  wrapper.style.justifyContent = isUser ? "flex-end" : "flex-start";

  var bubble = document.createElement("div");
  bubble.style.maxWidth = "82%";
  bubble.style.padding = "12px 14px";
  bubble.style.lineHeight = "1.5";
  bubble.style.borderRadius = isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px";
  bubble.style.background = isUser ? "#dcfce7" : "#e8edff";
  bubble.style.color = "#0f172a";
  bubble.innerHTML = "<b>" + sender + "</b><br>" + text;

  wrapper.appendChild(bubble);
  box.appendChild(wrapper);
  box.scrollTop = box.scrollHeight;
}

window.sendChat2 = function () {
  var input = document.getElementById("chatInput2");
  var text = input.value.toLowerCase().trim();

  if (!text) return;

  addMessage2("You", text, true);

  var response = "Sorry, I could not find that information. Try asking about assistants, coordinator, modules, visa, timetable, thesis, myOVGU, or contacts.";

  for (var i = 0; i < knowledge2.length; i++) {
    for (var j = 0; j < knowledge2[i].keys.length; j++) {
      if (text.indexOf(knowledge2[i].keys[j]) !== -1) {
        response = knowledge2[i].answer;
        break;
      }
    }
    if (response !== "Sorry, I could not find that information. Try asking about assistants, coordinator, modules, visa, timetable, thesis, myOVGU, or contacts.") {
      break;
    }
  }

  addMessage2("ITVET Bot", response, false);
  input.value = "";
};

window.quickAsk2 = function (q) {
  document.getElementById("chatInput2").value = q;
  window.sendChat2();
};

document.addEventListener("keydown", function (e) {
  var inputEl = document.getElementById("chatInput2");
  if (!inputEl) return;
  if (document.activeElement === inputEl && e.key === "Enter") {
    window.sendChat2();
  }
});
</script>





# Orientation for ITVET Study Programme



>You will find essential information for a successful start to your study process in this LiaScript.

Link for official website of ITVET program

https://www.itvet.ovgu.de/

     
   --{{0}}--

!?[](https://github.com/Masub27/Intro/blob/main/frau%20tamana.mp4?raw=true)

# Participation in the Introductory Event
All important information about the programme, the timetable and organisational matters are passed on here. In addition, it offers the opportunity to meet the coordinator of the study programme, **Yuliya Nepomyashcha, Lina Lockau and the team of research assistants**, who is also important contacts for organisational matters in ITVET study program.

You can find the recording of the introductory event by clicking the following link: 



https://cloud.ovgu.de/s/MWKSNfGQCL9xJm6

**Your ITVET contact persons:**

<span style="color: green;">Dr. Yuliya Nepomyashcha</span>



yuliya.nepomyashcha@ovgu.de,
 
 0391-67-56369

Research Assistants: 


<span style="color: green;">Mahwish Kanwal</span>  

  mahwish.kanwal@ovgu.de , 0176 70340091

<span style="color: green;">Masub Makhdoom</span>

  masub.makhdoom@ovgu.de , 01727098714

# Important Steps After Arriving in Magdeburg

 ## 1. City Registration

You must book an appointment with the **Bürgerbüro (City Registration Office)** to register your address in Magdeburg.

https://terminvergabe.magdeburg.de/select2?md=2

---

 ## 2. Inform the Enrolment Office

You must notify the **Enrolment Office** about:

- Your residential address  
- The registration certificate from Bürgerbüro  
- Your visa extension  

https://www.ovgu.de/unimagdeburg/en/International/Incoming+_+Ways+to+the+University/International+Students/Organizing+Your+Stay/Enrolment-p-48644.html

---

 ## 3. Student ID Card

After submitting your address, your **student ID card will be sent by post**.

More information:

https://www.ovgu.de/en/Study/First_Year+Orientation/First+Steps/Student+ID+card.html

The student card must be validated at machines located in:

- Campus Service Center  
- Building 6  
- Building 10  
- Building 40  
- University Library  

You must also create a **computer centre account** if you do not already have one.

 ## 4. Visa Extension

You must register at the **Foreigner’s Registration Office** to extend your visa.

https://www.ovgu.de/unimagdeburg/en/International/Incoming+_+Ways+to+the+University/International+Students/Organizing+Your+Stay/Foreigners_+Office-p-54296.html


---

# Understanding the myOVGU Portal

Please use the **myOVGU portal** regularly to check your enrolment status and study information.

![](https://github.com/Masub27/Intro/blob/main/Screenshot%2034.png?raw=true)

Portal link:

https://myovgu.ovgu.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces

Important notes:

- Personal access to the myOVGU portal must be set up immediately.  
- Students who applied through an agency should obtain login details from the agency.  
- After receiving access, change your password immediately.

Example of locking:

![](https://github.com/Masub27/Intro/blob/main/42.jpg?raw=true)

Example problem:

Insurance status report (**M10**) missing.  
Send it to: **enrolment@ovgu.de**

![](https://github.com/Masub27/Intro/blob/main/43.jpg?raw=true)

Common reasons for blocking:

* Missing insurance confirmation  
* Missing residential address  
*  Unpaid tuition fees  

---

# Deutschland Semester Ticket

The **Deutschlandsemesterticket** is valid across Germany on public transport except:

- ICE  
- IC / EC trains  

More information:

https://www.ovgu.de/deutschlandsemesterticket.html

---

# Creating and Using the University Account

Activate your university account here:

https://wext.ovgu.de/selfservice/terminal/user_anm.php

![](https://github.com/Masub27/Intro/blob/main/Screenshot%2035.png?raw=true)

This account is used for:

- Campus internet  
- OVGU webmail  
- MyOVGU portal  
- Library services  

OVGU Webmail:

https://webmail.ovgu.de/stable/

All official communication from the university will be sent to this email address.

---

# Registration for courses on eLearning 
The registration for courses on eLearning is mandatory for all students to sign up for courses. 
You must create university account (as mentioned in step 2) prior to registration on eLearning portal. Please use the following link for course registration:

https://elearning.ovgu.de/

# Study Programme regulations
Please read the following programme regulations relevant to  your studies (before and during your study program) 

*	Study and examination regulations <a href="https://www.bekanntmachungen.ovgu.de/media/A_Rundschreiben/1_05+Studienordnungen/Master+_+Studieng%C3%A4nge/International+Technical+and+Vocational+Education+and+Training/Studien_+und+Pr%C3%BCfungsordnung+International+Technical+and+Vocational+Education+and+Training+vom+05_12_2018/Studien_+und+Pr%C3%BCfungsordnung+International+Technical+and+Vocational+Education+and+Training+vom+05_12_2018-p-11464.pdf
" target="_blank">
  <button>DE</button>
</a> / <a href="https://elearning.ovgu.de/pluginfile.php/1046651/mod_folder/content/0/1_Study%20and%20Examination%20Regulations%20International%20Technical%20and%20Vocational%20Education%20and%20Training%2005.12.2018_engl.pdf?forcedownload=1" target="_blank">
  <button>EN</button>
</a>

*	Module manual <a href="https://www.bekanntmachungen.ovgu.de/media/Modulhandb%C3%BCcher/Master+_+Studieng%C3%A4nge/International+Technical+and+Vocational+Education+and+Training/Module+Handbook+M_Sc_+International+Technical+and+Vocational+Education+and+Training+May+2025-p-22352.pdf"target="_blank">
  <button>EN</button>
</a>


*	Internship regulations <a href="https://elearning.ovgu.de/pluginfile.php/1046651/mod_folder/content/0/3_Internship%20regulations%20ITVET_19.04.18.pdf?forcedownload=1" target="_blank">
  <button>EN</button>
</a>


*	Fee schedule <a href="https://www.bekanntmachungen.ovgu.de/media/A_Rundschreiben/1_14+Geb%C3%BChrenordnungen+zu+Studieng%C3%A4ngen/Geb%C3%BChren+f%C3%BCr+Studieng%C3%A4nge+und+sonstige+Studienangebote/International+Technical+and+Vocational+Education+and+Training_+M_Sc_/Satzung+zur+Erhebung+von+Geb%C3%BChren+f%C3%BCr+den+weiterbildenden+Masterstudiengang+%E2%80%9EInternational+Technical+and+Vocational+Education+and+Training%E2%80%9C+vom+27_03_2014-p-7432.pdf" target="_blank">
  <button>DE</button>
</a> / <a href="https://elearning.ovgu.de/pluginfile.php/1046651/mod_folder/content/0/4_Fee%20schedule%20ITVET_19.04.18_en.pdf?forcedownload=1" target="_blank">
  <button>EN</button>
</a>

Study programme regulations cloud link:
https://cloud.ovgu.de/s/aYW2ZT56S3ZoeYC

>we wish you a good start for your studies!

# Important Information

The **certificate of enrolment is not sent by post or email**.

You must download it yourself from:

**myOVGU → Reports section**

Under the **Students** tab you can:

- Download study certificates  
- Check your study status  
- Update your personal information

---

# Final Reminder

Please regularly check:

- Your **myOVGU portal**  
- Your **OVGU email account**  
- All **important deadlines**

Following these steps will help ensure a smooth start to your studies in the ITVET programme.

# ITVET Master Programme – Modules and Seminars Overview

>Please note that Modules 1–3 are offered in the Winter Semester and Modules 4–6 in the Summer Semester. Furthermore, successful completion of the first six modules is also a prerequisite for thesis registration.

| Module | Seminar / Course | CP | Semester |
|------|------------------|----|---------|
| **Module 1: Didactics and Methodology of Technical and Vocational Education and Training** | Didactics and Learning Theories in Vocational Education and Training (908410) | 6 | WiSe |
| | Development of Learning and Teaching Media in Vocational Education (904876) | 4 | WiSe |
| **Module 2: Structures and Theories of Technical and Vocational Education and Training** | Structures and Theories of Vocational Education (904385) | 4 | WiSe |
| | Focus Seminar for Vocational Education (904820) | 6 | WiSe |
| **Module 3: Didactics of Vocational Learning and Teaching** | Learning and Teaching Technologies in Practice (904292) | 4 | WiSe |
| | Basics on Didactics for Specialisation (904824) | 6 | WiSe |
| **Module 4: International Comparative Technical and Vocational Education and Training** | International Vocational Education I (904872) | 4 | SoSe |
| | International Vocational Education II (904873) | 6 | SoSe |
| **Module 5: Management and Evaluation of International Technical and Vocational Education and Training** | Quality Management (904839) | 6 | SoSe |
| | Vocational Education Management (904823) | 4 | SoSe |
| **Module 6: Curriculum and Media Development** | Development of Curricula (904875) | 4 | SoSe |
| | Action Fields of TVET Trainers (904874) | 6 | SoSe |
| **Module 7: Professional Practical Studies** | Practical Studies | 10 | WiSe / SoSe |
| | Internship |  | WiSe / SoSe |
| **Module 8: Master Thesis** | ITVET Master Colloquium | 20 | WiSe/SoSe |
| **WP Module 1: Organizational and Human Resource Development** | Organizational and Human Resource Development I (914540) | 4 | WiSe / SoSe |
| | Organizational and Human Resource Development II (914541) | 6 | WiSe / SoSe |
| **WP Module 2: Vocational Training for Sustainable Development** | Didactics for Sustainable Development (904825) | 6 | WiSe / SoSe |
| | Vocational Education for Sustainable Development (904877) | 4 | WiSe / SoSe |
| **WP Module 3: Methods of In-Company Training** | Methods of Vocational Training (904822) | 6 | WiSe / SoSe |
| | Workshop for Methods of In-Company Training (904882) | 4 | WiSe / SoSe |
| **WP Module 4: Research Methods** | Qualitative Research Methods (920202) | 4 | WiSe / SoSe |
| | Quantitative Research Methods (920470) | 4 | WiSe / SoSe |
| | Introduction in Research and Academic Writing (909614) | 6 | WiSe / SoSe |
| **WP Module 4.2: AI in TVET** | AI in TVET I – Foundations and Applications | 4 | WiSe/SoSe |
| | AI in TVET II – AI and Professional Development | 6 | WiSe/SoSe |
| **WP Module 4.3: Methodology of Online School Management and Educational Blogger** | Methodology and Trends of Online School Management | 4 | WiSe/SoSe |
| | A Paradigm Shift in Teaching: From Educator to Educational Blogger | 6 | WiSe/SoSe |


# 🎓 ITVET Programme
 ## Summer Semester 2026
 ## Course Timetable Overview

 >Enrolment key for all courses ITVETSS26

---

# Consultation Hours

| Item | Details |
|------|---------|
| ITVET consultation hours | Time  9:00 am – 10:00 am |
| Date Range | 13.04.2026 – 06.07.2026 |
| Day | Monday |

 Zoom link: https://ovgu.zoom-x.de/j/67090828158 

Meeting-ID: 670 9082 8158

Kenncode: 189869 

---

# Module 4
 ## International Comparative Technical and Vocational Education

 ## Seminar: International Vocational Education I

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Ms Idadze |
| Dates | 09.05.2026 (6h) <br> 10.05.2026 (6h) <br> 16.05.2026 (6h) <br> 17.05.2026 (6h) <br> 23.05.2026 (4h) |
| Class Time | 270 / 180 Min |
| Schedule | Friday / Saturday / Sunday |
| Time | 10:00 am – 1:30 / 3:00 pm |
| Breaks | 4 or 6h each, 45 min |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230193&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20778) |

  ## Seminar: International Vocational Education II

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Ms Idadze |
| Dates | 06.06.2026 (6h) <br> 07.06.2026 (6h) <br> 13.06.2026 (6h) <br> 14.06.2026 (6h) <br> 20.06.2026 (4h) |
| Class Time | 270 / 180 Min |
| Schedule | Friday / Saturday / Sunday |
| Time | 10:00 am – 1:30 / 3:00 pm |
| Breaks | 4 or 6h each, 45 min |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=231660&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20779) |

---

# Module 5
 ## Management and Evaluation of International Technical and Vocational Education and Training

  ## Seminar: Vocational Education Management

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Dr. Alamsyah, Moh Sanni Mufti |
| Dates | 04.05.2026 (4h) <br> 11.05.2026 (4h) <br> 18.05.2026 (4h) <br> 01.06.2026 (4h) <br> 08.06.2026 (4h) <br> 15.06.2026 (4h) <br> 22.06.2026 (4h) |
| Class Time | 180 Min |
| Day | Monday |
| Time | 1:00 pm – 4:00 pm (4h each 45 min.) |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230848&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20780) |

  ## Seminar: Quality Management

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Robert Kollenbaum |
| Dates | 22.05.2026 (4h) <br> 24.05.2026 (4h) <br> 30.05.2026 (4h) <br> 31.05.2026 (4h) <br> 12.06.2026 (4h) <br> 19.06.2026 (4h) <br> 21.06.2026 (4h) |
| Class Time | 180 Min (4h each 45 min.) |
| Schedule | Friday / Saturday / Sunday |
| Time | 10:00 am – 1:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230607&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20781) |

---

# Module 6
 ## Curriculum and Media Development

 ## Seminar: Development of Curricula

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Eman Aboelgoud |
| Dates | 28.05.2026 (6h) <br> 04.06.2026 (6h) <br> 11.06.2026 (6h) <br> 18.06.2026 (6h) <br> 25.06.2026 (4h) <br> 02.07.2026 (4h) <br> 09.07.2026 (4h) |
| Class Time | 180 Min – 4h each 45 min. |
| Day | Thursday |
| Time | 9:00 am – 12:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=232537&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20783) |

  ## Seminar: Action Fields of TVET Trainers

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Mr Lutz Thelen |
|  Dates | 02.06.2026 (4h) <br> 09.06.2026 (4h) <br> 16.06.2026 (4h) <br> 23.06.2026 (4h) <br> 30.06.2026 (4h) <br> 07.07.2026 (4h) <br> 09.07.2026 (4h) |
| Day | Tuesday / Thursday |
|  Time | 1:00 pm – 4:00 pm (4h each 45 min.) |

| Class Time | 270 Min – 6h, 180 Min – 4h |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=231670&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20784) |

---

# Module 7
  ## Practical Studies

| Field | Details |
|------|---------|
| Seminar | Practical Studies (Preparation and follow-up) |
| Dates | 13.04.2026 – 06.07.2026 |
| Class Time | 90 Min |
| Day | Monday |
| Time | 10:00 am – 11:30 am |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=239536&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=18077) |

---

# WPF Module 2
 ## Vocational Training for Sustainable Development

 ## Seminar: Vocational Education for Sustainable Development

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Ms Dr. Irma Grdzelidze |
| Dates | 09.04.2026 (4h) <br> 16.04.2026 (4h) <br> 23.04.2026 (4h) <br> 26.04.2026 (4h) <br> 30.04.2026 (4h) <br> 07.05.2026 (4h) <br> 21.05.2026 (4h) |
| Class Time | 180 Min – 4h each 45 min. |
| Schedule | Tuesday / Thursday / Sunday |
| Time | 10:00 am – 1:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230766&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20785) |

  ## Seminar: Didactics for Sustainable Development

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Ms Dr. Irma Grdzelidze |
| Dates | 11.04.2026 (6h) <br> 12.04.2026 (6h) <br> 18.04.2026 (6h) <br> 19.04.2026 (6h) <br> 25.04.2026 (4h) |
| Class Time | 270 Min – 6h, 180 Min – 4h (each 45 min.) |
| Schedule | Saturday / Sunday |
| Time | 3:00 pm – 9:00 pm (6h), 3:00 pm – 7:00 pm (4h) |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230128&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20786) |

---

# WPF Module 3
 ## Methods of In-Company Training

 ## Seminar: Methods of Vocational Training

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Mr Dr. Alamsyah, Moh Sanni Mufti |
| Dates | 08.04.2026 (4h) <br> 10.04.2026 (4h) <br> 15.04.2026 (4h) <br> 17.04.2026 (4h) <br> 22.04.2026 (4h) <br> 24.04.2026 (4h) <br> 29.04.2026 (4h) |
| Class Time | 180 Min (4h each 45 min.) |
| Schedule | Wednesday / Friday |
| Time | 9:00 am – 12:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230285&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20787) |

 ## Seminar: Workshop of Vocational Training

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Mr Dr. Alamsyah, Moh Sanni Mufti |
| Dates | 07.04.2026 (4h) <br> 09.04.2026 (4h) <br> 14.04.2026 (4h) <br> 16.04.2026 (4h) <br> 21.04.2026 (4h) <br> 23.04.2026 (4h) <br> 28.04.2026 (4h) |
| Class Time | 180 Min (4h each 45 min.) |
| Schedule | Tuesday / Thursday |
| Time | 2:00 pm – 5:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230977&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20788) |

---

# WPF Module 4
 ## Research Methods

 ## Seminar: Qualitative Research Methods

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Gericke, Erika, Prof. Dr., Mahwish Kanwal |
| Dates | 13.04.2026 (Kick-Off-Session 12:00 pm – 1:00 pm; 1h) <br> 24.04.2026 (9:00 am – 4:00 pm; 7h) <br> 08.05.2026 (10:00 am – 1:00 pm; 3h) <br> 29.05.2026 (9:00 am – 4:00 pm; 7h) <br> 26.06.2026 (9:00 am – 4:00 pm; 7h; R.024) <br> 10.07.2026 (9:00 am – 12:00 pm; 3h; R.024) |
| Time | Mixed sessions as listed above |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=230435&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20789) |

 ## Seminar: Introduction in Research and Academic Writing

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Lina Lockau, Mahwish Kanwal |
| Dates | 07.05.2026 (4h) <br> 21.05.2026 (4h) <br> 04.06.2026 (4h) <br> 11.06.2026 (4h) <br> 18.06.2026 (4h) <br> 25.06.2026 (4h) <br> 02.07.2026 (4h) |
| Schedule | Thursday |
| Time | 1:00 pm – 4:00 pm (4h each 45 min.) |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=231667&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20790) |

---

# WPF Module 4.2
 ## AI in TVET

 ## Seminar: AI in TVET I – Foundations and Applications

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturers | Hannes Tegelbeckers, Mahwish Kanwal, Masub Makhdoom |
| Dates | 07.04.2026 (4h) <br> 14.04.2026 (4h) <br> 21.04.2026 (4h) <br> 28.04.2026 (4h) <br> 05.05.2026 (4h) <br> 12.05.2026 (4h) <br> 19.05.2026 (4h) |
| Schedule | Tuesday |
| Time | 10:00 am – 1:00 pm (4h each 45 min.) |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=239480&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20791) |

 ## Seminar: AI in TVET II – AI and Professional Development

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturers | Hannes Tegelbeckers, Mahwish Kanwal, Masub Makhdoom |
| Dates | 26.05.2026 (4h) <br> 02.06.2026 (4h) <br> 09.06.2026 (4h) <br> 16.06.2026 (4h) <br> 23.06.2026 (4h) <br> 30.06.2026 (4h) <br> 07.07.2026 (4h) |
| Schedule | Tuesday |
| Time | 10:00 am – 1:00 pm (4h each 45 min.) |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=239479&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20792) |

---

# WPF Module 4.3
 ## Methodology of Online School Management and Educational Blogger

 ## Seminar: Methodology and Trends of Online School Management

| Field | Details |
|------|---------|
| Credits | 4 CP |
| Lecturer | Dr. Olena Karpova |
| Dates | 08.04.2026 (4h) <br> 15.04.2026 (4h) <br> 22.04.2026 (4h) <br> 29.04.2026 (4h) <br> 05.05.2026 (4h) <br> 12.05.2026 (4h) <br> 19.05.2026 (4h) |
| Class Time | 180 Min  (4h each 45 min.) |
| Schedule | Tuesday / Wednesday |
| Time | 1:00 pm – 4:30 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=239482&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20793) |

 ## Seminar: A Paradigm Shift in Teaching: From Educator to Educational Blogger

| Field | Details |
|------|---------|
| Credits | 6 CP |
| Lecturer | Dr. Olena Karpova |
| Dates | 06.05.2026 (4h) <br> 13.05.2026 (4h) <br> 20.05.2026 (4h) <br> 27.05.2026 (4h) <br> 03.06.2026 (4h) <br> 17.06.2026 (4h) <br> 24.06.2026 (4h) |
| Class Time | 180 Min – 4h each 45 min. |
| Schedule | Wednesday |
| Time | 1:00 pm – 4:30 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=239481&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20794) |

---

# Module 8
 ## Master Thesis

| Field | Details |
|------|---------|
| Seminar | ITVET Master colloquium |
| Lecturer | Lina Lockau |
| Dates | 06.05.2026 – 08.07.2026 |
| Holiday | 27.05.2026 |
| Schedule | Wednesday |
| Time | 9:00 am – 12:00 pm |
| LSF | [Open Course](https://lsf.ovgu.de/qislsf/rds?state=verpublish&status=init&vmfile=no&publishid=231747&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) |
| E-Learning | [Open E-Learning](https://elearning.ovgu.de/course/view.php?id=20795) |

---


# Master's Thesis

> Writing and Submission of Master's Thesis

# Step 1

 ## Preparatory work

	* Start thinking about your topic early on.

* 	Don't wait until the last semester to start your Master'thesis!

# Step 2

  ## Participation in the ITVET Master Colloquium

  The main aim of the ITVET Master's colloquium is to support students in the preparation of their Master's theses, particularly in the areas of academic writing and empirical research.

   ## Content

  * Presentations of scientific exposés (students)

*   Discussions

  ## Requirements

* Writing a scientific exposé of your Master's thesis 
*   	Presentation of scientific exposé 
*   	Active participation (Switch on the cameras)

# Step 3
   ## Registration of Master’s thesis
   **Requirements for registering the Master's thesis:**

* 	You have found a supervisor to review your Master's thesis  
   (our academic staff will only approve a review if you have written a good scientific exposé)

* 	Your tuition fees have all been duly paid

* 	You have earned at least 75 CP

**Registration Process:**

* 	Develop a scientific exposé 
 
* Find a secondary supervisor who will review your work (Prof. 
      Dr. Bünning is always the primary reviewer)Potential supervisors are: Dr. Yuliya Nepomyashcha(qualitative research), Lina Lockau(qualitative research), Hannes Tegelbeckers(quantitative research)

	* Fill out and sign the registration form

* 	Send the completed and signed registration form to your supervisor (he will sign it and also take care of Prof. Bünning's signature)

* 	Submit the registration form to the Examination Office: Ina Pietrulla Faculty of Humanities Examination Office https://hw.ovgu.de/hw/en/Study+and+Teaching/Examination+Office/Administrative+Staff/Ina+Pietrulla.html (if you are not in Magdeburg, there is also the possibility that your supervisor submits the form to the Examination Office, but for this he needs a power of attorney)

* 	After you have submitted the registration form to the Examination Office, you will receive a confirmation (e.g. as proof for immigration authorities)
 
# Step 4
 ## Submission of Master’s thesis
 	* Processing time: 6 months (date of submission is stated on registration confirmation document)

* 	You must submit two printed versions of your Master's thesis to the Examination Office, as well as a PDF file (the date in the PDF file must match the date of submission of the printed versions).

* 	The topic can only be returned once and only within the first month of the processing period.

* 	A defense of the Master's thesis is not required.

* 	The Master's thesis can be repeated once if it is assessed as “failed” (a second repetition of the Master's thesis is excluded)

> Important Note:  you must submit your new Master's thesis no later than 3 months after receiving the letter from the Examination Office informing you of your failure.

# END

![](https://github.com/Masub27/Intro/blob/main/3d.gif?raw=true)

