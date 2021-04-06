var app = new Vue({
    el: "#app",

  //------- data --------
    data: {
        //setings
        textsize: "14pt", 

        //change/add more etc..
        info : [
            "Taylor Galbraith #1067533",
            "20/S2 ANTH 2423 A- Human Evolution: Fact & Theory ",
            "April 6th, 2021"
        ],

        title: "Homo Floresiensis (The Hobbit)",
        head1: "The Hobbit",
        head2: "The Discovery ",
        head3: "",
        head4: "Its Interpretation In The Human Evolution Record",
        head5: "controversies/disagreements",

        //you can directly copy word paragraphs into these quotations.
        p1: "The Floresiensis also known as The Hobbit got its nickname from the species height. The Hobbit was estimated at about 1 meter tall (Groeneveld, 2017). The Hobbits lived about 18000 years ago, during the Pleistocene (Groeneveld, 2017).It was orginally thought that the species lived between c. 74,000- c. 12,000 years ago (Groeneveld, 2017). Which would have made them the last known living humans beside ourselves (Groeneveld, 2017). New evidence show that the species were much older around 100,000 and 60,000 years ago (Groeneveld, 2017). Homo Floresiensis have small bodies, small brain but large teeth and have a receding forehead, no chins and are hunched forward (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020). It is believed that their small bodies may be a result of long term isolation on an island with lack of resources and predators. (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020).This is known as Island Dwarfism (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020). Their lifestyle consisted of hunting and gathering (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020). They created and used stone tools and may have used fire.(Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020).   ",
        p2: "The discovery of the Homo Floresiensis aka the Hobbit took place in Indonesian island of Flores (Callaway, 2014). Researchers did not intend to discover the new species but were trying to figure out how ancient people traveled from mainland Asia to Australia. The research team found themselves in the Liang Bua Cave in the highlands of Flores in 2003 (Origins of “hobbit” species discovered, 2017). When the new species were found, they were buried with tool kits ranging between c. 190,000-c. 50,000 years old. ",
        p3: "Scientist believe that Homo Floresiensis are a distinct group indepent from Homo Sapiens (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020). Although the species are supposedly related from the genius homo (Homo floresiensis | The Smithsonian Institution’s Human Origins Program, 2020).",
        p4: "",
        p5: "",
        p6: "",
        
        titleImage: {
            //if internet link, just put the link in the src quotation,
            //if local image, put the image in the same directory as this file and put the name
            //  ex: "image.jpg" or "image.png"
            src : "https://c.pxhere.com/photos/b4/66/aerial_shot_aerial_view_fog_foggy_hazy_idyllic_landscape_misty-914741.jpg!d",
            ref: "source/credit of the picture",
            desc: "picture 1 of something random"
        },
        i1: {
            //if internet link, just put the link in the src quotation,
            //if local image, put the image in the same directory as this file and put the name
            //  ex: "image.jpg" or "image.png"
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Homo_floresiensis_(Kopie)_01.jpg/1280px-Homo_floresiensis_(Kopie)_01.jpg",
            ref: "",
            desc: "Homo Floresiensis"
        },
        i2: {
            src : "https://th.bing.com/th/id/OIP.v9sWFtAPI-_O68JwzxpTSwHaKi?w=126&h=180&c=7&o=5&dpr=1.25&pid=1.7",
            ref: "",
            desc: ""
        },
        i3: {
            src : "https://th.bing.com/th/id/R4316faa4c555cc8e034e170dc59e1bfe?rik=iUpQnvQAyTWsyg&riu=http%3a%2f%2fwww.secret-retreats.com%2fblog%2fwp-content%2fuploads%2f2016%2f04%2fflores-island.jpg&ehk=fqZHzvL5kGJS578HEAz078%2fmAViy%2fg3128PDlkaJdtE%3d&risl=&pid=ImgRaw",
            ref: "source/credit of the picture",
            desc: "Indonesian island of Flores"
        },
        i4: {
            src : "https://th.bing.com/th/id/OIP.YDPWQmamcvHseIfucoq_lgHaEP?pid=ImgDet&rs=1",
            ref: "source/credit of the picture",
            desc: "Professor Mike Morwood"
        },
        i5: {
            src : "https://c.pxhere.com/photos/b4/66/aerial_shot_aerial_view_fog_foggy_hazy_idyllic_landscape_misty-914741.jpg!d",
            ref: "source/credit of the picture",
            desc: "picture 1 of something random"
        },
        i6: {
            src : "https://c.pxhere.com/photos/b4/66/aerial_shot_aerial_view_fog_foggy_hazy_idyllic_landscape_misty-914741.jpg!d",
            ref: "source/credit of the picture",
            desc: "picture 1 of something random"
        },

        references : [
            //add references here, they all need to have a comma at the end except for the last
            "Callaway, E. (2014). The discovery of Homo floresiensis: Tales of the hobbit. Nature, 514(7523), 422–426. https://doi.org/10.1038/514422a",
            "Groeneveld, E. (2017, June 5). Homo Floresiensis. World History Encyclopedia; World History Encyclopedia. https://www.ancient.eu/Homo_Floresiensis/",
            "Origins of “hobbit” species discovered. (2017, April 22). CBC. https://www.cbc.ca/news/technology/hobbit-origins-discovered-homo-floresiensis-1.4080692#:~:text=Homo%20floresiensis%20was%20discovered%20on%20the%20island%20of,longer%20than%20the%20range%20seen%20in%20modern%20humans.",
	    "ref 3 for the lols"
        ]
    },

    mounted : function(){
        $("body").css({"font-size" : this.textsize})
    },
  //------- methods --------
    methods: {
        
    }
});
