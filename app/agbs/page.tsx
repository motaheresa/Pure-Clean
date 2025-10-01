import React from "react";

const page = () => {
  return (
    <section className=" w-2/4 mx-auto flex flex-col items-center text-center gap-6">
      <div>
        <img src="/54f067_dce00ef7cc394aa1a45d94dc8d3bd52d~mv2.avif" alt="" />
      </div>
      <h2 className="w-min text-4xl font-[350]">
        ALLGEMEINE GESCHÄFTSBEDINGUNGEN PURECLEAN
      </h2>
      <div className="mt-10 flex flex-col gap-10">
        <Item
          header={"§ 1 Geltung"}
          text={`Nachstehende AGB gelten für alle Verträge und Leistungen zwischen der
        PureClean Delgado Ponce als Auftragnehmer und Ihren Kunden als
        Auftragsgeber. Abweichenden oder ergänzenden Geschäftsbestimmungen des
        Auftraggebers gelten grundsätzlich als wegbedungen. Abweichenden
        Bedingungen bedürfen für ihre Wirksamkeit einer ausdrücklichen,
        schriftlichen Bestätigung der PureClean Delgado Ponce. Abweichende
        Vereinbarungen in bestehenden Angeboten oder Verträgen haben Vorrang.`}
        />
        <Item
          header={"§ 2 Leistungsbeschreib"}
          text={`Die Dienstleistungseinsätze erfolgen am Ort der gelegenen Sache. PureClean Delgado Ponce stellt zur Ausführung der mündlich oder schriftlich vereinbarten Dienstleistungen entsprechend qualifiziertes Personal zur Verfügung. Die einzelnen, zeitlichen und örtlichen Einsätze des Dienstpersonals richten sich nach der mündlichen oder schriftlichen Vereinbarungen zwischen PureClean Delgado Ponce und Auftraggeber. In begründeten Fällen können die Einsätze individuell abgesprochen oder zeitlich verschoben werden. Die Verschiebung der Dienstleitung bis 14 Tage vor dem Einsatz, können ohne Kostenfolge verschoben werden. Bei Verschiebung zwischen 13 Tagen und 1 Tag vor dem Einsatz wird eine Gebühr von der Hälfte des Einsatzes verrechnet.`}
        />
        <Item
          header={"§ 3 Preisbasis"}
          text={`Die Preise für die auszuführenden Arbeiten werden vertraglich zwischen dem Auftraggeber und PureClean Delgado Ponce vereinbart.  Die An- und Wegfahrt von je mehr als 15 Minuten von Sitz der PureClean Delgado Ponce zum Ort der gelegenen Sache des Auftragsgebers werden in Form einer Wegpauschale separat ausgewiesen und dem Auftraggeber in Rechnung gestellt. Bei mehr als 3 Stunden Arbeit am Stück hat das Dienstpersonal Anspruch auf eine Pause von zusätzlichen 15 Minuten. Die Pause zählt als Arbeitszeit und wird dem Auftraggeber verrechnet.`}
        />
        <Item
          header={"§ 4 Schlüssel"}
          text={`Sofern PureClean Delgado Ponce für die Erbringung seiner Leistung beim Auftraggeber einen Schlüssel benötigt um die Räumlichkeiten des Auftraggebers zu gelangen, ist der Schlüssel des Auftraggebers an PureClean Delgado Ponce vor Auftragsbeginn gegen einer Quittung zu übergeben. Der Schlüssel bleibt gemäss getroffener Vereinbarung im Besitz von PureClean Delgado Ponce. PureClean Delgado Ponce trägt die alleinige Verantwortung für den Schlüssel und haftet für allfällige Folgen durch den Verlust des Schlüssels.`}
        />
        <Item
          header={"§ 5 Reinigungsmittel und Verbrauchsmaterialien"}
          text={`Falls nicht anders mündlich oder schriftlich vereinbart, stellt der Auftraggeber die notwendigen Reinigungsgeräte sowie die notwendigen und geeigneten Reinigungsmittel sowie alle dazu nötigen Utensilien kostenlos zur Verfügung. Das eingesetzte Dienstpersonal ist berechtigt, fehlendes oder unzweckmässiges Reinigungsgerät und/oder Reinigungsmaterial nach Rücksprache und auf Kosten des Auftraggebers zu beschaffen. Die Kosten dafür und der damit verbundene Zeitaufwand werden dem Auftraggeber in Rechnung gestellt.`}
        />
        <Item
          header={"§ 5 Reinigungsmittel und Verbrauchsmaterialien"}
          text={`Falls nicht anders mündlich oder schriftlich vereinbart, stellt der Auftraggeber die notwendigen Reinigungsgeräte sowie die notwendigen und geeigneten Reinigungsmittel sowie alle dazu nötigen Utensilien kostenlos zur Verfügung. Das eingesetzte Dienstpersonal ist berechtigt, fehlendes oder unzweckmässiges Reinigungsgerät und/oder Reinigungsmaterial nach Rücksprache und auf Kosten des Auftraggebers zu beschaffen. Die Kosten dafür und der damit verbundene Zeitaufwand werden dem Auftraggeber in Rechnung gestellt.`}
        />
        <Item
          header={"§ 6 Rechnungsstellung und Zahlungskonditionen"}
          text={`Der Auftraggeber erhält von PureClean Delgado Ponce monatlich eine Rechnung über die ausgeführten Arbeiten, zusätzlichen Dienstleistungen und Auslagen. Der Rechnungsbetrag ist, wenn nichts Abweichendes vereinbart, innert 30 Tage zu bezahlen. Nach 30 Tagengerät der Auftraggeber ohne Mahnung in Verzug. Kommt der Auftraggeber in Zahlungsverzug, werden sämtliche Forderungen von PureClean Delgado Ponce aus der Geschäftsbeziehung sofort zur Zahlung fällig. Zahlungsverzug oder sonstige Veränderungen in den Verhältnissen des Auftraggebers, welche die Bezahlung der ausgeführten Arbeiten gefährden, berechtigen PureClean Delgado Ponce ohne weiteres fristlos vom Vertrag zurückzutreten und die Erbringung der Dienstleistungen einzustellen. Im Übrigen berechtigt der Verzug des Auftraggebers PureClean;`}
        >
          <ul className="list-disc font-[350] w-10/12 mx-auto">
            <li>
              alle bestehenden Forderungen gegen den Auftraggeber ungeachtet
              ihrer Fälligkeit sofort geltend zu machen oder für die Forderungen
              Sicherheiten zu verlangen
            </li>
            <li>
              noch ausstehende Dienstleistungen ungeachtet der für diese
              getroffenen Vereinbarungen nur gegen Vorkasse auszuführen
            </li>
            <li>
              nach einer Zahlungserinnerung folgende Mahnspesen geltend zu
              machen (1. Mahnung 25CHF / 2 Mahnung 75CHF / 3 Mahnung 100CHF){" "}
            </li>
          </ul>
        </Item>
        <Item
          header={"§ 7 Haftung"}
          text={`Für Schadenersatzansprüche, welche seitens des Auftraggebers geltend gemacht werden könnten, besteht eine Haftpflichtversicherung seitens PureClean Delgado Ponce (bis 10 Millionen Franken pro Schadensereignis), soweit dies unverzüglich nach dem Schadenereignis, gegenüber PureClean Delgado Ponce schriftlich angezeigt wird. Für Schäden, die der Auftraggeber nicht innerhalb 10 Tagen ab Schadensereignis schriftlich anzeigt, lehnt PureClean Delgado Ponce ab.`}
        />
        <Item
          header={"§ 8 Vertragsdauer und Kündigungsfrist"}
          text={`Der zwischen PureClean Delgado Ponce und dem Auftraggeber geschlossene Vertrag hat, solange nichts Abweichendes vertraglich vereinbart wird, eine unbegrenzte Laufzeit. Die Kündigungsfrist beträgt 14 Tage und kann unter Einhaltung der Kündigungsfrist auf Ende jeder Kalenderwoche erfolgen. Die Kündigung muss schriftlich auf eingeschriebenen Postweg erfolgen. § 9 Vertragsauflösung seitens PureClean Delgado Ponce PureClean Delgado Ponce behält sich vor, bei Objekten, welche den normalen Verschmutzungsgrad (insbesondere bei Schimmel, Ungeziefer, Abfallberge, etc.) übersteigen, die vereinbarten Arbeiten nicht auszuführen. In solchen Fällen ist der Vertrag als nichtig.`}
        />
        <Item
          header={"§ 10 Differenzen, Erfüllungsort und Gerichtsstand"}
          text={`Differenzen, welche sich aus der Geschäftsbeziehung ergeben können, werden wenn immer möglich im gegenseitigen Gespräch zwischen PureClean Delgado Ponce und dem Auftraggeber geregelt. Gerichtsstand für sämtliche sich zwischen den Parteien ergebenen Streitigkeiten ist der Sitz von PureClean Delgado Ponce. Auf die Rechtsbeziehung zwischen den Parteien kommt ausschliesslich das Schweizerische Recht zur Anwendung. Die Allgemeinen Geschäftsbedingungen sind integrierter Bestandteil der Vereinbarung mit dem Auftraggeber und PureClean Delgado Ponce weist bei der ersten Kontaktaufnahme ausdrücklich auf diese hin, welche im Übrigen auf der Web-Site von PureClean veröffentlich sind. Durch die Auftragserteilung erklärt der Auftraggeber sein Einverständnis mit diesen AGB.`}
        />
        <p>Zürich, 28. Oktober. 2012</p>
      </div>
    </section>
  );
};

export default page;

function Item({
  header,
  text,
  children,
}: {
  header: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-2xl font-[350] ">{header}</h3>
      <p className="leading-8 text-md tracking-wide font-[350]">{text}</p>
      {children}
    </section>
  );
}
