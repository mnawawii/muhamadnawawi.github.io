document.addEventListener('DOMContentLoaded', function () {

    const translations = {
        en: {
            // Navigation
            navHome: "Home",
            navAbout: "About",
            navProjects: "Projects",
            navExperience: "Experience",
            navContact: "Contact",
            contactMeBtn: "Contact Me",
            navHomeMobile: "Home",
            navAboutMobile: "About",
            navProjectsMobile: "Projects",
            navExperienceMobile: "Experience",
            navContactMobile: "Contact",
            contactMeBtnMobile: "Contact Me",

            // Hero Section
            heroName: "Muhamad Nawawi",
            heroTitle: "Specializing in Ecology, Molecular Biology, Genetics, and Bioinformatics",
            heroSubtitle: "A Biology graduate from Padjadjaran University specializing in ecology, molecular biology, genetics, and bioinformatics. I apply data analysis and molecular techniques to uncover and conserve biodiversity.",
            viewProjectsBtn: "View My Projects",

            // About Section
            aboutTitle: "About Me",
            aboutSubtitle: "A journey in the world of biology and conservation.",
            aboutGreeting: "Hello! I'm Muhamad Nawawi.",
            aboutP1: "A Biology graduate from Padjadjaran University (GPA 3.64) with a deep interest in the complexities of life, which led me to focus on ecology, genetics, and bioinformatics.",
            aboutP2: "My experience as a laboratory and field assistant has honed my skills in research methodology, data analysis using Python & R, and molecular techniques. I believe a data-driven approach is key to understanding and protecting our precious ecosystems.",
            aboutP3: "I am currently seeking opportunities to dedicate my skills as a researcher or analyst, with the primary goal of making a tangible contribution to biodiversity conservation efforts in Indonesia.",
            
            // Relevant Coursework
            courseworkTitle: "Relevant Coursework",
            course1: "DNA Barcoding",
            course2: "Biotechnology & Bioinformatics",
            course3: "Genetics",
            course4: "Genetics Practicum",
            course5: "Cell & Molecular Biology",
            course6: "Cell & Molecular Biology Practicum",
            course7: "Conservation Biology",
            course8: "Ecology Research Methods",
            course9: "Terrestrial Ecology",
            course10: "Aquatic Ecology",
            course11: "Microbiology",
            course12: "Microbiology Practicum",
            course13: "Tropical Biodiversity",
            course14: "Biosystematics & Evolution",
            course15: "Data Curator for Biodiversity",
            course16: "Statistical Biology",

            // Skills Section
            skillsTitle: "Core Competencies",
            hardSkills: "Technical Skills (Hard Skills)",
            softSkills: "Non-Technical Skills (Soft Skills)",
            skillComm: "Scientific Communication",
            skillTeam: "Teamwork",
            skillProblem: "Analytical Problem-Solving",
            skillTime: "Time & Project Management",
            skillLead: "Leadership",
            skillAdapt: "Adaptability",
            
            // Projects Section
            projectsTitle: "Featured Projects & Case Studies",
            projectsSubtitle: "Implementing knowledge and skills in real-world projects.",
            project1Title: "Thesis Research: DNA Barcoding on Honey",
            project1Desc: "Identifying the biodiversity of bee forage plants through DNA analysis of honey samples.",
            project2Title: "Field Observation: Bird Diversity Study",
            project2Desc: "Analysis of bird species diversity in Masigit Kareumbi Hunting Park for ecotourism potential.",
            project3Title: "Biodiversity Administrator",
            project3Desc: "Developing proposals, managing permits, and coordinating teams for a biodiversity research project for PT Olahkarsa.",
            readMore: "Read More →",
            readMore2: "Read More →",
            readMore3: "Read More →",

            // Experience & Education Section
            expTitle: "Experience & Education",
            expSubtitle: "Footsteps in the academic and professional world.",
            exp1Title: "Terrestrial Ecology Field Assistant",
            exp1Company: "Ecology Laboratory, Padjadjaran University",
            exp2Title: "Genetics & Molecular Biology Lab Assistant",
            exp2Company: "Biosystematics and Molecular Lab, Unpad",
            exp3Title: "Freelance Biodiversity Administrator",
            exp3Company: "PT Olahkarsa, Bandung",
            eduTitle: "Bachelor of Science, Biology",
            eduCompany: "Padjadjaran University",
            viewDetails: "View Details",
            viewDetails2: "View Details",
            viewDetails3: "View Details",

            // Achievements & Certifications Section
            achievementsTitle: "Achievements & Certifications",
            achievement1Title: "BAZNAS Research Scholarship Recipient",
            achievement1Desc: "Awarded a competitive research scholarship from BAZNAS to support thesis research on DNA Barcoding.",
            achievement2Title: "UI GreenMetric Sustainability Program",
            achievement2Desc: "Completed the UI GreenMetric Online Course on Sustainability, gaining insights into sustainable university practices and environmental management.",

            // Contact & Footer Section
            contactTitle: "Let's Collaborate",
            contactSubtitle: "I am open to discussions, research projects, or career opportunities in conservation and bioinformatics. Feel free to get in touch.",
            sendEmailBtn: "Send Email",
            contactLocation: "Bandung, Indonesia",
            contactPhone: "+62 851-5665-4778",
            footerText: "© 2025 Muhamad Nawawi. Created with a passion for conservation.",

            // Modal Text
            modalSummary: "Summary:",
            modalSummary2: "Summary:",
            modalSummary3: "Summary:",
            modalProblem: "The Problem",
            modalProblem2: "The Problem",
            modalProblem3: "The Problem",
            modalRole: "My Role",
            modalRole3: "Role & Responsibilities",
            modalProcess: "Process & Solution",
            modalProcess2: "Process & Solution",
            modalResult: "Result & Impact",
            modalResult2: "Result & Impact",
            modalResult3: "Result & Impact",
            responsibilities: "Key Responsibilities:",
            responsibilities2: "Key Responsibilities:",
            responsibilities3: "Key Responsibilities:",

            // Project Modals
            modal1Title: "Case Study: DNA Barcoding on Honey",
            modal1Summary: "Thesis research to identify bee forage plant biodiversity through field data collection, laboratory analysis (DNA isolation, PCR), and bioinformatics data analysis (MEGA, BioEdit) for species identification.",
            modal1Problem: "Visual identification of bee forage plants is often difficult. Honey, containing DNA from nectar, offers a more comprehensive and efficient identification method.",
            modal1Role: "As the lead researcher, I was responsible for all research stages, from methodology design to final report writing, including the creation of technical reports with data analysis in tables and graphs, and structured scientific discussion.",
            modal1Process: "<li><b>Field & Lab Work:</b> Conducted field data collection and laboratory analysis including DNA isolation and PCR.</li><li><b>Bioinformatics Analysis:</b> Utilized MEGA and BioEdit for bioinformatics data analysis to identify species.</li><li><b>Reporting:</b> Composed a technical research report including methodology, data analysis results (tables and graphs), and structured scientific discussion.</li>",
            modal1Result: "Successfully produced a comprehensive technical report, demonstrating the potential of DNA barcoding as an efficient, non-invasive biodiversity monitoring tool.",
            
            modal2Title: "Case Study: Bird Ecotourism Potential",
            modal2Summary: "Field observation to study the diversity of bird species in the Masigit Kareumbi Hunting Park Conservation Area as a basis for developing ecotourism potential.",
            modal2Problem: "The conservation area has untapped ecotourism potential. Scientific data on bird diversity was needed to design sustainable ecotourism programs.",
            modal2Process: "<li><b>Data Collection & Analysis:</b> Collected and analyzed species diversity data within the conservation area.</li><li><b>Reporting:</b> Compiled an observation report containing data, analysis, and management recommendations.</li>",
            modal2Result: "Produced a comprehensive observation report with concrete recommendations for area management, such as establishing bird watching trails and developing local guide programs.",
            
            modal3Title: "Case Study: Biodiversity Administrator",
            modal3Summary: "Served as a Freelance Biodiversity Administrator for PT Olahkarsa, supporting the planning and administration of a biodiversity research project.",
            modal3Problem: "PT Olahkarsa required technical support in drafting a solid research proposal, ensuring compliance with government regulations, and coordinating the team for smooth project execution in the field.",
            modal3Role: "<li><b>Proposal Development:</b> Designed and wrote structured and systematic biodiversity research proposals.</li><li><b>Regulatory Coordination:</b> Communicating and coordinating with government agencies to manage the research permit process.</li><li><b>Team Management:</b> Contributing to the recruitment process for field researchers and coordinating with the technical team.</li>",
            modal3Result: "Successfully drafted a comprehensive proposal and facilitated a smooth permitting process, demonstrating the ability to manage the administrative aspects of a scientific project.",
            
            // Experience Modals
            exp1Details: "<li>Reviewed and assessed over 50 practicum reports, ensuring data accuracy and systematic formatting.</li><li>Provided technical assistance and troubleshooting to over 15 students.</li><li>Guided and demonstrated various practicum modules, including plant ecology (quadrat analysis, quadrant, profile diagrams) and animal ecology (ornithology, mammalogy, herpetology, entomology).</li>",
            exp2Details: "<li>Reviewed and assessed over 100 practicum reports for accuracy and technical consistency.</li><li>Provided technical assistance to over 35 students to ensure smooth experiments.</li><li>Guided and demonstrated modules including genetic analysis, cytogenetics, DNA isolation, PCR, and gel electrophoresis.</li>",
            exp3Details: "<li>Developed structured biodiversity research plans and proposals.</li><li>Coordinated with government agencies for research permitting processes.</li><li>Contributed to the recruitment of field researchers and coordinated with the technical team for project fluency.</li>",
        },
        id: {
            // Navigation
            navHome: "Beranda",
            navAbout: "Tentang",
            navProjects: "Proyek",
            navExperience: "Pengalaman",
            navContact: "Kontak",
            contactMeBtn: "Hubungi Saya",
            navHomeMobile: "Beranda",
            navAboutMobile: "Tentang",
            navProjectsMobile: "Proyek",
            navExperienceMobile: "Pengalaman",
            navContactMobile: "Kontak",
            contactMeBtnMobile: "Hubungi Saya",

            // Hero Section
            heroName: "Muhamad Nawawi",
            heroTitle: "Spesialisasi Ekologi, Biologi Molekuler, Genetika, dan Bioinformatika",
            heroSubtitle: "Lulusan Biologi Universitas Padjadjaran dengan spesialisasi ekologi, biologi molekuler, genetika, dan bioinformatika. Saya mengaplikasikan analisis data dan teknik molekuler untuk mengungkap dan melestarikan keanekaragaman hayati.",
            viewProjectsBtn: "Lihat Proyek Saya",

            // About Section
            aboutTitle: "Tentang Saya",
            aboutSubtitle: "Sebuah perjalanan dalam dunia biologi dan konservasi.",
            aboutGreeting: "Halo! Saya Muhamad Nawawi.",
            aboutP1: "Seorang Sarjana Biologi dari Universitas Padjadjaran (IPK 3.64) dengan ketertarikan mendalam pada kompleksitas kehidupan, yang membawa saya untuk fokus pada bidang ekologi, genetika, dan bioinformatika.",
            aboutP2: "Pengalaman saya sebagai asisten laboratorium dan lapangan telah mengasah kemampuan saya dalam metodologi penelitian, analisis data menggunakan Python & R, serta teknik molekuler. Saya percaya bahwa pendekatan berbasis data adalah kunci untuk memahami dan melindungi ekosistem kita yang berharga.",
            aboutP3: "Saat ini, saya mencari kesempatan untuk mendedikasikan keahlian saya sebagai peneliti atau analis, dengan tujuan utama berkontribusi secara nyata dalam upaya konservasi keanekaragaman hayati di Indonesia.",

            // Relevant Coursework
            courseworkTitle: "Mata Kuliah Relevan",
            course1: "Barkoding DNA",
            course2: "Bioteknologi & Bioinformatika",
            course3: "Genetika",
            course4: "Praktikum Genetika",
            course5: "Biologi Sel & Molekuler",
            course6: "Praktikum Biologi Sel & Molekuler",
            course7: "Biologi Konservasi",
            course8: "Metode Riset Ekologi",
            course9: "Ekologi Terestrial",
            course10: "Ekologi Perairan",
            course11: "Mikrobiologi",
            course12: "Praktikum Mikrobiologi",
            course13: "Keanekaragaman Hayati Tropis",
            course14: "Biosistematika & Evolusi",
            course15: "Kurator Data Hayati",
            course16: "Biologi Statistika",

            // Skills Section
            skillsTitle: "Keterampilan Utama",
            hardSkills: "Keterampilan Teknis (Hard Skills)",
            softSkills: "Keterampilan Non-Teknis (Soft Skills)",
            skillComm: "Komunikasi Ilmiah",
            skillTeam: "Kerja Sama Tim",
            skillProblem: "Pemecahan Masalah Analitis",
            skillTime: "Manajemen Waktu & Proyek",
            skillLead: "Kepemimpinan",
            skillAdapt: "Kemampuan Adaptasi",

            // Projects Section
            projectsTitle: "Proyek Unggulan & Studi Kasus",
            projectsSubtitle: "Implementasi ilmu dan keahlian dalam proyek nyata.",
            project1Title: "Penelitian Skripsi: DNA Barcoding pada Madu",
            project1Desc: "Mengidentifikasi keanekaragaman tumbuhan pakan lebah melalui analisis DNA dari sampel madu.",
            project2Title: "Observasi Lapangan: Studi Keanekaragaman Burung",
            project2Desc: "Analisis keanekaragaman spesies burung di Taman Buru Masigit Kareumbi untuk potensi ekowisata.",
            project3Title: "Biodiversity Administrator",
            project3Desc: "Menyusun proposal, mengurus perizinan, dan koordinasi tim untuk proyek penelitian biodiversitas PT Olahkarsa.",
            readMore: "Baca Selengkapnya →",
            readMore2: "Baca Selengkapnya →",
            readMore3: "Baca Selengkapnya →",

            // Experience & Education Section
            expTitle: "Pengalaman & Pendidikan",
            expSubtitle: "Jejak langkah dalam dunia akademis dan profesional.",
            exp1Title: "Asisten Lapangan Ekologi Terestrial",
            exp1Company: "Laboratorium Ekologi, Universitas Padjadjaran",
            exp2Title: "Asisten Lab Genetika & Biologi Molekuler",
            exp2Company: "Lab Biosistematika dan Molekuler, Unpad",
            exp3Title: "Freelance Biodiversity Administrator",
            exp3Company: "PT Olahkarsa, Bandung",
            eduTitle: "Sarjana Sains, Biologi",
            eduCompany: "Universitas Padjadjaran",
            viewDetails: "Lihat Detail",
            viewDetails2: "Lihat Detail",
            viewDetails3: "Lihat Detail",
            
            // Achievements & Certifications Section
            achievementsTitle: "Pencapaian & Sertifikasi",
            achievement1Title: "Penerima Beasiswa Riset BAZNAS",
            achievement1Desc: "Menerima beasiswa riset kompetitif dari BAZNAS untuk mendukung penelitian skripsi mengenai DNA Barcoding.",
            achievement2Title: "Program Keberlanjutan UI GreenMetric",
            achievement2Desc: "Menyelesaikan Kursus Online UI GreenMetric tentang Keberlanjutan, mendapatkan wawasan tentang praktik universitas berkelanjutan dan manajemen lingkungan.",

            // Contact & Footer Section
            contactTitle: "Mari Berkolaborasi",
            contactSubtitle: "Saya terbuka untuk diskusi, proyek penelitian, atau peluang karier di bidang konservasi dan bioinformatika. Jangan ragu untuk menghubungi saya.",
            sendEmailBtn: "Kirim Email",
            contactLocation: "Bandung, Indonesia",
            contactPhone: "+62 851-5665-4778",
            footerText: "© 2025 Muhamad Nawawi. Dibuat dengan semangat konservasi.",

            // Modal Text
            modalSummary: "Ringkasan:",
            modalSummary2: "Ringkasan:",
            modalSummary3: "Ringkasan:",
            modalProblem: "Masalah",
            modalProblem2: "Masalah",
            modalProblem3: "Masalah",
            modalRole: "Peran Saya",
            modalRole3: "Peran & Tanggung Jawab",
            modalProcess: "Proses & Solusi",
            modalProcess2: "Proses & Solusi",
            modalResult: "Hasil & Dampak",
            modalResult2: "Hasil & Dampak",
            modalResult3: "Hasil & Dampak",
            responsibilities: "Tanggung Jawab Utama:",
            responsibilities2: "Tanggung Jawab Utama:",
            responsibilities3: "Tanggung Jawab Utama:",

            // Project Modals
            modal1Title: "Studi Kasus: DNA Barcoding pada Madu",
            modal1Summary: "Penelitian skripsi untuk identifikasi biodiversitas tumbuhan pakan lebah melalui pengumpulan data lapangan, analisis laboratorium (isolasi DNA, PCR), dan analisis data bioinformatika (MEGA, BioEdit).",
            modal1Problem: "Identifikasi visual tumbuhan pakan lebah seringkali sulit. Madu, yang mengandung DNA dari nektar, menawarkan metode identifikasi yang lebih komprehensif dan efisien.",
            modal1Role: "Sebagai peneliti utama, saya bertanggung jawab atas seluruh tahapan penelitian, termasuk menyusun laporan penelitian teknis yang mencakup metodologi, hasil analisis data dalam bentuk tabel dan grafik, serta pembahasan ilmiah yang terstruktur.",
            modal1Process: "<li><b>Pengumpulan & Analisis Lab:</b> Melakukan pengumpulan data lapangan dan analisis laboratorium termasuk isolasi DNA dan PCR.</li><li><b>Analisis Bioinformatika:</b> Menggunakan MEGA dan BioEdit untuk analisis data bioinformatika guna identifikasi spesies.</li><li><b>Pelaporan:</b> Menyusun laporan teknis yang mencakup metodologi, hasil analisis data (tabel dan grafik), dan pembahasan ilmiah terstruktur.</li>",
            modal1Result: "Berhasil menyusun laporan penelitian teknis yang komprehensif, menunjukkan potensi besar DNA barcoding sebagai alat monitoring keanekaragaman hayati yang efisien dan non-invasif.",
            
            modal2Title: "Studi Kasus: Potensi Ekowisata Burung",
            modal2Summary: "Observasi lapangan untuk mempelajari keanekaragaman spesies burung di Kawasan Konservasi Taman Buru Masigit Kareumbi sebagai dasar pengembangan potensi ekowisata.",
            modal2Problem: "Kawasan konservasi memiliki potensi ekowisata yang belum tergali maksimal. Diperlukan data ilmiah mengenai keanekaragaman hayati (khususnya burung) untuk merancang program ekowisata yang berkelanjutan.",
            modal2Process: "<li><b>Pengumpulan & Analisis Data:</b> Mengumpulkan dan menganalisis data keanekaragaman spesies di dalam kawasan konservasi.</li><li><b>Pelaporan:</b> Menyusun laporan hasil observasi yang memuat data, analisis, dan rekomendasi pengelolaan.</li>",
            modal2Result: "Menghasilkan laporan observasi yang komprehensif dengan rekomendasi konkret untuk pengelolaan kawasan, seperti pembuatan jalur pengamatan burung dan pengembangan program pemandu wisata lokal.",
            
            modal3Title: "Studi Kasus: Biodiversity Administrator",
            modal3Summary: "Berperan sebagai Freelance Biodiversity Administrator untuk PT Olahkarsa, mendukung perencanaan dan administrasi proyek penelitian keanekaragaman hayati.",
            modal3Problem: "PT Olahkarsa membutuhkan dukungan teknis dalam menyusun proposal penelitian yang solid, memastikan kepatuhan terhadap regulasi pemerintah, dan mengkoordinasikan tim untuk kelancaran proyek di lapangan.",
            modal3Role: "<li><b>Penyusunan Proposal:</b> Merancang dan menulis proposal penelitian keanekaragaman hayati yang terstruktur dan sistematis.</li><li><b>Koordinasi Regulasi:</b> Berkomunikasi dan berkoordinasi dengan instansi pemerintah untuk mengurus proses perizinan penelitian.</li><li><b>Manajemen Tim:</b> Berkontribusi dalam proses rekrutmen peneliti lapangan dan berkoordinasi dengan tim teknis.</li>",
            modal3Result: "Berhasil menyusun proposal yang komprehensif dan membantu kelancaran proses perizinan, menunjukkan kemampuan untuk mengelola aspek administratif proyek ilmiah.",
            
            // Experience Modals
            exp1Details: "<li>Meninjau dan memberikan penilaian terhadap lebih dari 50 laporan praktikum, memastikan akurasi data dan format yang sistematis.</li><li>Memberikan asistensi teknis dan pemecahan masalah kepada lebih dari 15 mahasiswa.</li><li>Membimbing dan mendemonstrasikan berbagai modul praktikum, termasuk ekologi tumbuhan (analisis kuadrat, kuadran, diagram profil) dan ekologi hewan (ornitologi, mammalogi, herpetologi, entomologi).</li>",
            exp2Details: "<li>Meninjau dan memberikan penilaian terhadap lebih dari 100 laporan praktikum, memastikan akurasi data dan konsistensi teknis.</li><li>Memberikan asistensi teknis kepada lebih dari 35 mahasiswa untuk memastikan kelancaran eksperimen.</li><li>Membimbing dan mendemonstrasikan modul termasuk analisis genetika, sitogenetika, isolasi DNA, PCR, dan elektroforesis gel.</li>",
            exp3Details: "<li>Menyusun rencana dan proposal penelitian keanekaragaman hayati yang terstruktur.</li><li>Berkoordinasi dengan instansi pemerintah untuk proses perizinan penelitian.</li><li>Berkontribusi dalam proses rekrutmen peneliti lapangan dan berkoordinasi dengan tim teknis untuk kelancaran proyek.</li>",
        }
    };

    let currentLang = 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (key.includes('Process') || key.includes('Role') || key.includes('Details')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id.includes(lang));
        });
    };

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.includes('en') ? 'en' : 'id';
            setLanguage(lang);
        });
    });

    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    const openModalButtons = document.querySelectorAll('.open-modal-button');
    const closeModalButtons = document.querySelectorAll('.close-modal-button');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (translations[currentLang] && translations[currentLang][key]) {
                        if (key.includes('Process') || key.includes('Role') || key.includes('Details')) {
                           element.innerHTML = translations[currentLang][key];
                        } else {
                           element.textContent = translations[currentLang][key];
                        }
                    }
                });
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.querySelector('.modal-content').classList.remove('scale-95');
                }, 10);
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.add('opacity-0');
        modal.querySelector('.modal-content').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            const anyModalOpen = document.querySelector('.modal:not(.hidden)');
            if (!anyModalOpen) {
                document.body.style.overflow = 'auto';
            }
        }, 300);
    };

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            const openModal = document.querySelector('.modal:not(.hidden)');
            closeModal(openModal);
        }
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    setLanguage('en');
});
