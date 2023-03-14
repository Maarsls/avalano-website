import React from "react";
import FAQComponent from "./FAQComponent";
import Heading from "../Heading";

export default function FAQSection() {
  return (
    <div className="p-5 pt-16 pb-20 bg-primary-background-color">
      <Heading title="Häufig gestellte Fragen" />

      <div className="w-full mx-auto overflow-hidden lg:w-3/4 rounded-xl">
        <FAQComponent
          question={"Was ist Avalano?"}
          answer={
            "Avalano ist eine Lawinensonde zur Schneedeckenanalyse, die Ihnen hilft, die Schneetemperatur und -struktur zu bestimmen."
          }
        />
        <FAQComponent
          question={"Wie funktioniert Avalano?"}
          answer={
            "Avalano verfügt über mehrere Temperaturmessringe entlang der Sonde, die drahtlos mit einer Smartphone-App verbunden sind. Die App zeigt Ihnen die Temperaturverteilung über die gesamte Schneedecke an und hilft Ihnen, potenzielle Schwachschichten zu erkennen."
          }
        />
        <FAQComponent
          question={"Warum ist Avalano nützlich?"}
          answer={
            "Avalano kann Ihnen helfen, das Lawinenrisiko besser einzuschätzen und sicherere Entscheidungen im freien Gelände zu treffen. Außerdem können Sie mit Avalano Ihre Messdaten mit anderen Nutzern teilen und so zur Verbesserung der Lawinenwarnungen beitragen."
          }
        />

        <FAQComponent
          question={"Wie kann ich Avalano kaufen?"}
          answer={
            "Avalano ist noch nicht auf dem Markt erhältlich, aber Sie können sich auf unserer Website für unseren Newsletter anmelden und über den Fortschritt unseres Projekts informiert bleiben."
          }
        />

        <FAQComponent
          question={"Wie lange hält der Akku von Avalano?"}
          answer={
            "Avalano hat einen wiederaufladbaren Lithium-Ionen-Akku, der je nach Nutzung bis zu 8 Stunden hält. Sie können den Akkustand jederzeit auf der App überprüfen."
          }
        />

        <FAQComponent
          question={"Wie robust ist Avalano?"}
          answer={
            "Avalano ist aus hochwertigem Aluminium gefertigt und kann Temperaturen von -40°C bis +85°C standhalten. Die Sonde ist wasserdicht und stoßfest."
          }
        />

        <FAQComponent
          question={"Wie genau ist Avalano?"}
          answer={
            "Avalano misst die Temperatur mit einer Genauigkeit von ±0,1°C und einer Auflösung von 0,01°C. Die Sonde hat eine Länge von 3 Metern und einen Durchmesser von 12 Millimetern. Die Temperaturmessringe sind im Abstand von 10 Zentimetern angebracht."
          }
        />
      </div>
    </div>
  );
}
