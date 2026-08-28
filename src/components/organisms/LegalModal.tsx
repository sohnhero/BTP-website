"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  Building2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export type LegalTabType = "mentions" | "confidentialite" | "cgu";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTabType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = "mentions",
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);

  // Sync initial tab when modal opens or initialTab prop changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Handle ESC key to close modal & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="legal-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="legal-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="legal-modal-header">
          <div className="legal-modal-header-left">
            <div className="legal-modal-icon-badge">
              {activeTab === "mentions" && <Building2 size={20} />}
              {activeTab === "confidentialite" && <Lock size={20} />}
              {activeTab === "cgu" && <Scale size={20} />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="legal-modal-title">
                {activeTab === "mentions" && "Mentions Légales"}
                {activeTab === "confidentialite" && "Politique de Confidentialité"}
                {activeTab === "cgu" && "Conditions Générales d'Utilisation"}
              </h2>
              <span className="legal-modal-subtitle">
                FIDELE SARL BTP & Ingénierie · Dakar, Sénégal
              </span>
            </div>
          </div>

          <button
            type="button"
            className="legal-modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          >
            <X size={20} />
          </button>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="legal-modal-tabs">
          <button
            type="button"
            className={`legal-tab-btn ${activeTab === "cgu" ? "is-active" : ""}`}
            onClick={() => setActiveTab("cgu")}
          >
            <Scale size={15} />
            <span>Conditions d'Utilisation (CGU)</span>
          </button>

          <button
            type="button"
            className={`legal-tab-btn ${activeTab === "confidentialite" ? "is-active" : ""}`}
            onClick={() => setActiveTab("confidentialite")}
          >
            <Lock size={15} />
            <span>Politique de Confidentialité</span>
          </button>

          <button
            type="button"
            className={`legal-tab-btn ${activeTab === "mentions" ? "is-active" : ""}`}
            onClick={() => setActiveTab("mentions")}
          >
            <FileText size={15} />
            <span>Mentions Légales</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="legal-modal-body">
          {/* TAB 1: MENTIONS LÉGALES */}
          {activeTab === "mentions" && (
            <div className="legal-content-flow">
              <div className="legal-banner-card">
                <div className="legal-banner-badge">
                  <ShieldCheck size={14} />
                  <span>Informations Réglementaires Certifiées</span>
                </div>
                <h3>FIDELE SARL — Bâtiment, Travaux Publics & Génie Civil</h3>
                <p>
                  Conformément aux obligations légales et réglementaires applicables aux entreprises au Sénégal, retrouvez l’ensemble des données administratives et juridiques de notre société.
                </p>
              </div>

              <div className="legal-section">
                <h4>1. Éditeur de la Plateforme Institutionnelle</h4>
                <div className="legal-info-grid">
                  <div className="info-box">
                    <span className="info-label">Raison sociale</span>
                    <strong className="info-value">FIDÈLE SARL</strong>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Forme juridique</span>
                    <strong className="info-value">Société à Responsabilité Limitée (SARL)</strong>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Secteur d'activité</span>
                    <strong className="info-value">BTP, Génie Civil, Réhabilitation & Transport</strong>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Siège Social</span>
                    <strong className="info-value">Ouest Foire, Villa N° 12, Route de l'Aéroport, Dakar</strong>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Téléphones officiels</span>
                    <strong className="info-value">+221 33 821 49 74 / +221 77 638 12 45</strong>
                  </div>
                  <div className="info-box">
                    <span className="info-label">E-mail de contact</span>
                    <strong className="info-value">contact@fidelesarl.sn</strong>
                  </div>
                </div>
              </div>

              <div className="legal-section">
                <h4>2. Direction de la Publication & Rédaction</h4>
                <p>
                  <strong>Directeur de la publication :</strong> Direction Générale FIDELE SARL.
                  <br />
                  <strong>Responsable de la rédaction :</strong> Service Communication & Relations Extérieures.
                </p>
              </div>

              <div className="legal-section">
                <h4>3. Hébergement & Sécurité Informatique</h4>
                <p>
                  Le site web institutionnel est hébergé sur des infrastructures cloud de haute disponibilité conformes aux normes ISO/IEC 27001. Les échanges de données sont sécurisés via un protocole de chiffrement SSL/TLS (HTTPS 256 bits).
                </p>
              </div>

              <div className="legal-section">
                <h4>4. Propriété Intellectuelle & Droits d’Auteur</h4>
                <p>
                  L’ensemble des éléments constitutifs de ce site (textes, photographies de chantiers, modélisations 3D, chartes graphiques, vidéos, logos et éléments d’ingénierie) sont la propriété exclusive de <strong>FIDELE SARL</strong> ou font l’objet d’un droit d’utilisation régulier.
                </p>
                <div className="legal-callout">
                  <AlertCircle size={18} />
                  <span>
                    Toute reproduction, représentation, distribution ou exploitation totale ou partielle du contenu sans autorisation expresse et écrite de FIDELE SARL est strictement prohibée.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: POLITIQUE DE CONFIDENTIALITÉ */}
          {activeTab === "confidentialite" && (
            <div className="legal-content-flow">
              <div className="legal-banner-card blue">
                <div className="legal-banner-badge blue">
                  <Lock size={14} />
                  <span>Protection des Données Personnelles</span>
                </div>
                <h3>Protection de la Vie Privée & Données Personnelles</h3>
                <p>
                  FIDELE SARL accorde une importance capitale à la confidentialité et à la sécurité de vos informations personnelles conformément aux directives de la Commission des Données Personnelles (CDP) du Sénégal et aux normes RGPD.
                </p>
              </div>

              <div className="legal-section">
                <h4>1. Nature des Données Collectées</h4>
                <p>
                  Dans le cadre de l’utilisation de notre plateforme, nous collectons exclusivement les données transmises volontairement via nos formulaires de contact, d’estimation de projet ou de dépôt de candidature :
                </p>
                <ul className="legal-list">
                  <li>Identité : Nom, Prénom, Raison sociale (entreprise/collectivité).</li>
                  <li>Coordonnées : Adresse e-mail, numéro de téléphone.</li>
                  <li>Données projet : Type d'ouvrage, localisation, cahier des charges ou fichiers joints (CV/Devis).</li>
                </ul>
              </div>

              <div className="legal-section">
                <h4>2. Finalités du Traitement</h4>
                <p>Vos données sont collectées pour des objectifs précis et légitimes :</p>
                <div className="legal-bullets-grid">
                  <div className="bullet-card">
                    <CheckCircle2 size={16} />
                    <span>Élaboration d'études techniques et établissement de devis BTP</span>
                  </div>
                  <div className="bullet-card">
                    <CheckCircle2 size={16} />
                    <span>Conduite des échanges avec les maîtres d'ouvrage et partenaires</span>
                  </div>
                  <div className="bullet-card">
                    <CheckCircle2 size={16} />
                    <span>Gestion des candidatures pour le recrutement de nos équipes</span>
                  </div>
                  <div className="bullet-card">
                    <CheckCircle2 size={16} />
                    <span>Amélioration continue de l'expérience utilisateur du site</span>
                  </div>
                </div>
              </div>

              <div className="legal-section">
                <h4>3. Confidentialité & Absence de Cession à des Tiers</h4>
                <div className="legal-callout success">
                  <ShieldCheck size={18} />
                  <span>
                    <strong>Engagement FIDELE SARL :</strong> Vos données ne sont jamais vendues, louées ou partagées à des fins commerciales à des tiers. Elles restent réservées au traitement strict de vos demandes par nos ingénieurs et services administratifs.
                  </span>
                </div>
              </div>

              <div className="legal-section">
                <h4>4. Vos Droits & Exercice de la Gestion des Données</h4>
                <p>
                  Vous disposez à tout moment d’un droit d’accès, de rectification, de suppression et d’opposition concernant vos informations personnelles.
                </p>
                <p className="contact-dpo">
                  Pour exercer ces droits, adressez votre demande par e-mail à :{" "}
                  <a href="mailto:contact@fidelesarl.sn">contact@fidelesarl.sn</a> ou par courrier à notre siège social à Dakar.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CONDITIONS GÉNÉRALES D'UTILISATION (CGU) */}
          {activeTab === "cgu" && (
            <div className="legal-content-flow">
              <div className="legal-banner-card green">
                <div className="legal-banner-badge green">
                  <Scale size={14} />
                  <span>Conditions d'Accès & d'Engagement</span>
                </div>
                <h3>Conditions Générales d'Utilisation du Site</h3>
                <p>
                  Les présentes conditions régissent l’utilisation du site web de FIDELE SARL. Tout accès au site implique l’acceptation sans réserve des règles décrites ci-après.
                </p>
              </div>

              <div className="legal-section">
                <h4>1. Objet du Site & Services Présentés</h4>
                <p>
                  Le site a pour objet de présenter les activités, références de chantiers, expertises en génie civil et services de BTP de la société FIDELE SARL. Il permet également d’initier des demandes d'estimations et d'études techniques.
                </p>
              </div>

              <div className="legal-section">
                <h4>2. Portée des Estimations & Pré-devis en Ligne</h4>
                <p>
                  Les formulaires d'estimation de projet et les simulateurs présents sur le site fournissent des pré-estimations indicatives basées sur des ratios moyens du secteur BTP au Sénégal.
                </p>
                <div className="legal-callout warning">
                  <AlertCircle size={18} />
                  <span>
                    <strong>Précision importante :</strong> Ces chiffres n'ont pas de valeur contractuelle binding tant qu'une étude de sol, une analyse de métré et une offre technico-financière formelle n'ont pas été signées par FIDELE SARL et le Maître d'Ouvrage.
                  </span>
                </div>
              </div>

              <div className="legal-section">
                <h4>3. Engagements & Responsabilité de l'Utilisateur</h4>
                <p>L’utilisateur s’engage à :</p>
                <ul className="legal-list">
                  <li>Transmettre des données exactes et sincères lors de ses demandes de devis ou contacts.</li>
                  <li>Ne pas tenter de perturber la sécurité ou le fonctionnement des systèmes informatiques du site.</li>
                  <li>Respecter la propriété intellectuelle des contenus graphiques, visuels et techniques de FIDELE SARL.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h4>4. Droit Applicable & Juridiction Compétente</h4>
                <p>
                  Les présentes CGU sont régies par le droit sénégalais. Tout litige relatif à l’interprétation ou à l’exécution des présentes sera soumis à la compétence exclusive des tribunaux compétents de Dakar.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="legal-modal-footer">
          <div className="legal-footer-contact">
            <MapPin size={14} />
            <span>Siège FIDELE SARL : Ouest Foire, Dakar, Sénégal</span>
          </div>

          <button
            type="button"
            className="btn btn-secondary legal-modal-ok-btn"
            onClick={onClose}
          >
            Fermer et retourner au site
          </button>
        </div>
      </div>
    </div>
  );
};
