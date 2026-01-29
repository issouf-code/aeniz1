import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import president from "../assets/president.jpg";
import vicePresident from "../assets/vice_president.jpg";
import secretaireGeneral from "../assets/secretaire_general.jpg";
import secretaireSportif from "../assets/secretaire_sportif.jpg";
import affaireAcademic from "../assets/affaire_academic.jpg";
import tresoriere from "../assets/tresoriere.jpg";
import communication from "../assets/communication.jpg";
import conseiller from "../assets/conseiller.jpg";

export default function About() {
  const { t } = useTranslation();

  const members = useMemo(
    () => [
      {
        id: "president",
        name: "Moutari Zakari Djibo",
        roleKey: "rolePresident",
        img: president,
      },
      {
        id: "vice-president",
        name: "Massalatchi Beido Beido Habibou",
        roleKey: "roleVicePresident",
        img: vicePresident,
      },
      {
        id: "sg",
        name: "Ibrahim Boukar Issaka",
        roleKey: "roleSecretaryGeneral",
        img: secretaireGeneral,
      },
      {
        id: "communication",
        name: "Hachimou Zabeirou Mahamadou",
        roleKey: "roleCommunication",
        img: communication,
      },
      {
        id: "academic",
        name: "Ali Yahaya Ouzeifa",
        roleKey: "roleAcademic",
        img: affaireAcademic,
      },
      {
        id: "academic-adjoint",
        name: "Abdoul Nassirou Samaila Ali",
        roleKey: "roleAcademicAssistant",
        img: conseiller,
      },
      {
        id: "sport",
        name: "Ousmane Mohamed Ibrahim",
        roleKey: "roleSport",
        img: secretaireSportif,
      },
      {
        id: "treasurer",
        name: "Farida Harouna Ousseini",
        roleKey: "roleTreasurer",
        img: tresoriere,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* ================= PAGE HEADER ================= */}
      <header className="mx-auto max-w-4xl px-4 py-12 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600">
          {t("aboutTitle")}
        </h1>

        <p className="text-lg text-gray-700">
          {t("aboutIntro")}{" "}
          
        </p>

        <p className="text-gray-700">
          {t("HistoireDuFondement")}
        </p>
      </header>

      {/* ================= EXECUTIVE COMMITTEE ================= */}
      <section className="bg-white px-6 py-12 sm:px-12">
        <h2 className="mb-10 text-center text-2xl font-semibold text-green-700">
          {t("executiveCommittee")}
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <img
                src={member.img}
                alt={`${member.name}, ${t(member.roleKey)}`}
                loading="lazy"
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover border-2 border-green-600"
              />

              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>

              <p className="text-sm text-gray-600">
                {t(member.roleKey)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CLOSING STATEMENT ================= */}
      <section className="bg-gray-50 px-4 py-12 text-center">
        <p className="mx-auto max-w-3xl text-gray-700 leading-relaxed">
          {t("aboutClosing")}
        </p>
      </section>
    </main>
  );
}
