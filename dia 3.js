let carreira = prompt(
    "Olá, por favor digite qual carreira você gostaria de seguir: Front-End ou Back-End ?"
  );
  if (carreira == "Front-End") {
    var linguagemFront = prompt(
      " Dentro de Front-End, o que você gostaria de aprender: React ou Vue?"
    );
  } else if (carreira == "Back-End") {
    var linguagemBack = prompt(
      " Dentro de Back-End, o que você gostaria de aprender: C-Sharp ou Java?"
    );
  }
  var carreira2 = prompt(
    "Voce gostaria de se tornar um especialista na sua linguagem ou se tornar um Full-Stack? Digite Especialista ou Full-Stack para responder!"
  );
  if (carreira2 == "Especialista") {
    alert(
      "Que legal, o mercado precisa muito de profissionais especialistas na aréa de " +
        carreira +
        ", continue seus estudos!"
    );
  } else if (carreira2 == "Full-Stack") {
    alert(
      "Olha só! Você quer se tornar um profissional Full Stack, uma pessoa que entende tanto de Front como de Back-End, o mercado tem otimas vagas com bons salarios para sua aréa, mas lembre-se, nunca pare seus estudos!"
    );
  }
  var tecnologia = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite SIM ou NÃO"
  );
  while (tecnologia == "SIM") {
    var escolha = prompt(
      "Digite a tecnologia que você gostaria de se especializar ou conhecer:"
    );
    if (escolha == "NÃO") {
      alert("Que legal que voce quer aprender todas essas tecnologias!");
      break;
    }
    alert("Que legal que voce escolheu " + escolha + "!");
  }
  