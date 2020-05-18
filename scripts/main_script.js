//Main JQuery script
/*
change text for HTML
and change . text for .html
*/

var data = {
  lan: {
    en: {
      menu:["Who am i?", "My projects", "Social media"],
      demo:["You don't know? come and find out.", "Some things i'm working on.", "Basically, how to hire me."],
      topper: "Welcome to my website, no hacking, please!",
      about: ["About me","Right now i’m in the middle of a transition between amateur and professional, i’ve worked in a couple of web projects for fun, i have around a year of experience on (internet) tech support with american customers.\n      <br><br>\nI learned HTML in highschool and programming in college, after i dropped out mechatronics engineering i choose to only code for fun, now, after i learned more about Flask (Python), HTML, CSS and JavaScript i decided it was time to start web development as a professional; Personally i consider myself a good coder and a decent chess player, honest, focused and self-motivated.\n<br><br>\nAt this moment i’m working on a couple of independent projects, this site is just the front door to my projects, feel free to every line of code on mi GitHub or just to e-mail me.\n<br><br>\nHave a nice day!\n"],
      projects: ["Projects",
        "There are no projects...Yet."
      ],
      social: ["Social presence",'<p>This is my <a href="https://github.com/13burn/">GitHub</a> page.</p><br><p>And this is my <a href="https://www.linkedin.com/in/bardo-ary-espinosa-aguilar-a4349611b/">LinkedIn</a> profile.</p>'],
      default: "Site under construction, if you think this is a mistake please contact the author"
    },
    sp: {
      menu:["¿Quién soy?", "Mis proyectos", "Redes sociales"],
      demo:["¿No sabes? entra para averiguarlo.", "Algunas cosas en las que estoy trabajando.", "Basicamente, como contratarme."],
      topper: "¡Bienvenidos a mi sitio, sin hackeos, por favor!",
      about: ["Acerca de mi","Justo ahora estoy en medio de la transición de amateur a profesional, he trabajado en un par de proyectos web por diversión, en el área de soporte técnico (a Internet) tengo alrededor de un año de experiencia con clientes en E. U. A.\n        <br><br>\n        Aprendí HTML en el bachillerato y a programar en la universidad, después de dejar la carrera de Ingeniería Mecatronica decidí solo programar por diversión, ahora, después de aprender mas sobre Flask(Python), HTML, CSS y JavaScript decidí que es hora de entrar al desarrollo web como profesional; Personalmente me considero un buen programador y ajedrecista decente, honesto, enfocado y auto-motivado.\n        <br><br>\n        En este momento estoy trabajando en un par de proyectos independientes, este sitio es solo la puerta de entrada a mis proyectos, siéntanse libres de revisar todo en mi GitHub o contactarme a mi correo electrónico.\n        <br><br>\n        ¡Tengan un buen día!"],
      projects: ["Proyectos", "No hay proyectos... Aún." ],
      social: ["Redes sociales.",'<p>Esta es mi pagina de <a href="https://github.com/13burn/">GitHub</a>.</p><br><p>Y este es mi perfil de <a href="https://www.linkedin.com/in/bardo-ary-espinosa-aguilar-a4349611b/">LinkedIn</a>.</p>'],

      default: ["Sitio en construcción, si cree que esto es un error por favor contacte al autor.", null]
    }

  }
}

//content writer function
function writer(ln="sp"){
  //write on cards
  $(".lead").text(data.lan[ln].topper);
  $(".about").text(data.lan[ln].menu[0]);
  $(".projects").text(data.lan[ln].menu[1]);
  $(".social").text(data.lan[ln].menu[2]);
  //write on card content
  $("#aboutDes").text(data.lan[ln].demo[0]);
  $("#projectsDes").text(data.lan[ln].demo[1]);
  $("#socialDes").text(data.lan[ln].demo[2]);
  //write on secondary cards
  $("#about").text(data.lan[ln].about[0]);
  console.log(data.lan[ln].about[0]);
  $("#aboutcont").html(data.lan[ln].about[1]);
  $("#projects").text(data.lan[ln].projects[0]);
  $("#projectscont").html(data.lan[ln].projects[1]);
  $("#social").text(data.lan[ln].social[0]);
  $("#socialcont").html(data.lan[ln].social[1]);

}



function blink(){
  //turn n off
  $("span").delay(2500).queue(function (next) {
      $(this).css({"text-shadow":"0px 0px 0px ", "color":"black"});
      next()
    });
    //turn n on
  $("span").delay(150).queue(function (next) {
      $(this).css({"text-shadow":"0px 0px 10px #0abdc6", "color":"#0abdc6"});
      next()
    });
    //turn n off

    $("span").delay(300).queue(function (next) {
        $(this).css({"text-shadow":"0px 0px 0px ", "color":"black"});
        next()
      });
      //turn n on

      $("span").delay(600).queue(function (next) {
          $(this).css({"text-shadow":"0px 0px 10px #0abdc6", "color":"#0abdc6"});
          next()
        });
}

$(document).ready(function(){

    //variables setup
    ln="sp";

    //first load
    writer(ln);
    $("#translate").text("Translate");
    $(".returner").text("Regresar");

    //hiding secondary cards
    $(".notmain").hide()

    //content loading function
    $("#translate").click(function(){
      $(".change").hide();
      if (ln == "sp"){
        ln ="en";
        $(".returner").text("Return");
        $("#translate").text("Traducir");
      }else{
        ln ="sp";
        $(".returner").text("Regresar");
        $("#translate").text("Translate");
      }

      writer(ln)
      $(".change").show(500);

    });

    $("#Goabout").click(function (){
      console.log("alright");
    });

    $("#Goprojects").click(function (){
      console.log("alright");
    });

    $("#Gosocial").click(function (){
      console.log("alright");
    });

    $("#me").mouseenter(function(){
      $(this).attr("src", "images/dd1.png");
    });

    $("#Goabout").click(function(){
      $(".card-deck").hide(400);
      $("#main-about").show(400);
    });
    $("#Goprojects").click(function(){
      $(".card-deck").hide(400);
      $("#main-projects").show(400);
    });
    $("#Gosocial").click(function(){
      $(".card-deck").hide(400);
      $("#main-social").show(400);
    });

    $(".returner").click(function(){
      $(".notmain").hide(400);
      $(".card-deck").show(400);
    })
    blink();


});
