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
