FusionCharts.ready(function(){
    var chartObj = new FusionCharts({
type: 'multilevelpie',
renderAt: 'chart-container',
width: '650',
height: '650',
dataFormat: 'json',
dataSource: {
"chart": {
    "bgColor": "1F0B45, 041D4B",
    "bgratio":"0,100",
    "borderRadius":"20",
    "legendPosition":"absolute",
    "baseFontSize": "11",
    "caption": "Design and Future Journey",
    "subcaption": "5 Weeks",
    "showPlotBorder": "1",
    "piefillalpha": "100",
    "pieborderthickness": "1",
    "hoverfillcolor": "#CCCCCC",
    "piebordercolor": "#FFFFFF",
    "hoverfillcolor": "#CCCCCC",
   // "plottooltext": "$label, $valueK, $percentValue",
    //Theme
    "theme": "fusion"
},
"category":[{
    "label": "Design and Future",
    "color": "#41f226",
   "value" : "500",
   "tootltext":"Design and Future",
"category": [{
    "label": "Group 1",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Aditya Jain,Sanjay Sudarshan,Aniruddha Naik,Roshni Sundar Rajan,Vikash Raj",
    "category": [{
        "label": "Altverse Service",
        "color": "#f8bd19",
        "value": "35",
        "tooltext": "Sensors + Intelligence,Products,Conversational agents/Chatbot,Internet Forums",
        "category": [{
            "label": "Aditya",
            "color": "#f8bd19",
            "value": "9.99",
            "tooltext":"Contactless Touch, HCI in retail, Haptic feedback, Teleoperation, Chaos Theory, Technological Determinism, Novacene, Echolocation, Aural-tactile Synesthesia, Ultrasound, Audio Waveforms, Acoustics, Tarkovsky, Sci-fi Cinema",
            "link":"./student_aditya.html"
        }, {
            "label": "Sanjay",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"./student_sanjay.html",
            "tooltext":"Gamification,Data Mining,Biopolitics,Panopticon,Surveillance State,Free Will,World Building,Gamified car experience,fictitious article,Mechanism Design"
            
        }, {
            "label": "Aniruddha",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"./student_aniruddha.html",
            "tooltext":"speculative design , Floating Architecture, VR, Transportation,Renewable energy,Sci fi"
        }, {
            "label": "Roshni",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"./student_roshni.html",
            "tooltext":"renewable resources , Green Architecture , Solar Energy, Rain Water Harvesting, Grey water Recycling "
        },
        {
            "label": "Vikash",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"./student_vikash.html",
            "tooltext":"Social, Disability,Language,Tactile, auditory,Digital device, AI,Prototying, UX,Visualisation,Documentation,mind-mapping"
        }]
    }]},{
    "label": "Group 2",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Sudhanshu Rastogi,Zahid Nadim,Alryk Fonseca,Purvi Mehta,Ruchi Jain,Akshat Vats,Archita Johari,Vaishnavi Sridhar",
    "category":[{
        "label": "Sustainability",
        "color": "#33ccff",
        "value": "70",
        "tooltext": "Inclusive,Responsible Design,Social Innovation,Ecology,Sustainability",
        "category": [{
            "label": "Sudhanshu",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_sudhanshu.html",
            "tooltext":"melting of glaciers and ice sheets a sollution"
        }, {
            "label": "Zahid",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_zahid.html",
            "tooltext":"BIOMIMICRY, BIOPHILIC GREEN DESIGN"
        }, {
            "label": "Alryk",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_alryk.html",
            "tooltext":"CLEAR CONSCIENCE, SUSTAINABILITY, CIRCULAR ECONOMY,  INTERCONNECTEDNESS, SELF REGULATION, BIOMIMICRY, INTER-CONNECTEDNESS, READING, JOURNALLING, EXISTENTIAL CRISIS, RECONNECTING, PERSONAL GROWTH"
        }, {
            "label": "Purvi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_purvi.html",
            "tooltext":"Agriculture, Agritech, Exploration"
        },
        {
            "label": "Ruchi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_ruchi.html",
            "tooltext":"Sustainable, waste, restorative ecosystems"
        },
        {
            "label": "Akshat",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_akshat.html",
            "tooltext":"Rural, Economic Prosperity, Financial Literacy, Agriculture, Farmer, Intervention"
        },
        {
            "label": "Archita",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_archita.html",
            "tooltext":"Environment"
        }, {
            "label": "Vaishnavi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"./student_vaishnavi.html",
            "tooltext":"Sustainable thinking,Nature"
        }]
    }
    ]},{
    "label": "Group 3",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Ashish Yadav,Akshata Parate,Soumya Talwar,Namita Thomas,Shivam Gupta",
    "category":[{
        "label": "psychology",
        "color": "#ccff66",
        "value": "35",
        "tootltext":"Philosophy/death,Healthcare,Gender,More than human,Accessibility,Cognition/psychology",
        "category": [{
            "label": "Akshata",
            "color": "#ccff66",
            "value": "9.99",
            "tooltext":"Human psychology,Tech life, Technology, Addiction, Social Media, Digital Natives,conception, Digital Wellbeing,Social Media,Addiction,Human Health, Depression",
            "link":"./student_akshata.html"
        }, {
            "label": "Namita",
            "color": "#ccff66",
            "value": "9.99",
            "link":"./student_namita.html",
            "tooltext":"Reachability,Thumbzone,UX,Empathize,Ideate,Affordance,User insights"
        },{
            "label": "Shivam",
            "color": "#ccff66",
            "value": "9.99",
            "link":"./student_shivam.html",
            "tooltext":"Immersive experiences, digital vs real, dimensions of an experience"
        },
        {
            "label": "Soumya",
            "color": "#ccff66",
            "value": "9.99",
            "link":"./student_soumya.html",
            "tooltext":"Death, Philosoply, Data, Machine Learning, Twitter, Absurdist Fiction"
        },{
            "label": "Aashish",
            "color": "#ccff66",
            "value": "9.99",
            "link":"./student_ashish.html",
            "tooltext":"Gender Tech Inclusion Design, Intersectionality Cis normative Biases, Machine Learning AI, Instagram Spark AR"
        }
        ]
    }]
},
   {
   "label": "Group 4",
       "color":"#8daafc",
       "value": "150",
       "tooltext":"Ananthakrishnan M,Abinaya Nagappan,Ulhas Abraham,Anantha Padmanaban,Aishwarya Manjunath,Aayush Saraf",
           "category":
           [
           {
               "label": "Gamification",
               "color": "#eff298",
               "value": "35",
               "tooltext":"Immersive/AR/VR,EdTech/Learning,Games,Gamification",
               "category":
           [
               {
                   "label": "Anantha M",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_ananthakrishnan.html",
                   "tooltext":""
               }, {
                   "label": "Abinaya",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_abinaya.html",
                   "tooltext":"Sustainable energy, solar energy, alternative futures, interactive storytelling"
               },
               {
                   "label": "Ulhas",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_ulhas.html",
                   "tooltext":"MARKETING, MINIMALISM, MATERIAL CULTURE, PSYCHOLOGY, CAPITALISM, CONSUMERISM, RABBIT HOLING, DYSTOPIAN FICTION, SPECULATION, SELF REFLECTION, MODERN CONSUMER, STORYTELLING, INDIAN SOCIETY, KEY OPINION LEADERS"
               },
               {
                   "label": "Anantha P",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_anantha.html",
                   "tooltext":"VR,AI,AR,Cognitive analysis,Hand Gesture,Visual Learning,Design Thinking,Utopian future,Life skills"
               },
               {
                   "label": "Aishwarya",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_aishwarya.html",
                   "tooltext":"Gamification, Psychology, User study, Literature review, Selection bias, Confirmation bias, Objective design, Universal design"
               },
               {
                   "label": "Aayush",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"./student_aayush.html",
                   "tooltext":"Reciprocation, Kinship, Sharing, Emotions, Actions, Behaviour, Mutuality, Hope, Biomimicry, Empathy, Cognition, Collectivism,Intervene, Transcend, Restructure, Empathise, Design 'with' not 'For', Interpersonal Relations,Understand, Interview, Listen, Empathise, Learn, Rabbit-Hole, Perspective,Fail, Endure, Minecraft, VR, Alternate Future, Limitations, Utopia, Dystopia, Freedom, Exploration"
               }
           ]
           }
           ]
   }  
]
}]
}
});
    chartObj.render();
});