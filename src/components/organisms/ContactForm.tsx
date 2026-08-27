"use client";

import React, { useState, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  FileText,
  UploadCloud,
  File,
  X,
  Send,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { ContactMode } from "@/components/sections/ContactSection";

interface ContactFormProps {
  mode: ContactMode;
}

export const ContactForm: React.FC<ContactFormProps> = ({ mode }) => {
  const [formSuccess, setFormSuccess] = useState<{
    title: string;
    description: string;
    targetEmail: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "Cher visiteur";

    setTimeout(() => {
      setIsSubmitting(false);

      if (mode === "general") {
        setFormSuccess({
          title: "Message transmis avec succès !",
          description: `Merci ${name}. Votre demande de contact a été enregistrée. Une confirmation visiteur a été préparée et notre équipe a été notifiée pour vous répondre sous 24h ouvrées.`,
          targetEmail: "Fidele@fidele.sn",
        });
      } else if (mode === "partnership") {
        const company = (formData.get("company") as string) || "votre structure";
        setFormSuccess({
          title: "Proposition de partenariat reçue !",
          description: `Merci ${name}. Votre demande de partenariat pour ${company} a été transmise à notre direction des partenariats et alliances stratégiques.`,
          targetEmail: "Fidele@fidele.sn",
        });
      } else {
        const position = (formData.get("position") as string) || "le poste visé";
        const fileNotice = selectedFile
          ? ` avec le CV joint (${selectedFile.name})`
          : "";
        setFormSuccess({
          title: "Candidature enregistrée !",
          description: `Merci ${name}. Votre dossier pour ${position}${fileNotice} a été transmis au département Recrutement & RH.`,
          targetEmail: "Fidele@fidele.sn",
        });
      }

      e.currentTarget.reset();
      setSelectedFile(null);
    }, 800);
  };

  return (
    <div className="form-console-wrapper">
      <form key={mode} className="hybrid-form" onSubmit={handleSubmit}>
        {/* ============================================================
            FORMULAIRE 1 : CONTACT GÉNÉRAL
            Champs : nom, email, téléphone, objet, message
            Notification : contact@fidelesarl.com
            ============================================================ */}
        {mode === "general" && (
          <>
            {/* Nom */}
            <div className="input-group">
              <div className="input-icon">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet *"
                required
                className="input-field"
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <div className="input-icon">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                required
                className="input-field"
              />
            </div>

            {/* Téléphone */}
            <div className="input-group">
              <div className="input-icon">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone / WhatsApp *"
                required
                className="input-field"
              />
            </div>

            {/* Objet */}
            <div className="input-group">
              <div className="input-icon">
                <HelpCircle size={18} />
              </div>
              <select name="subject" defaultValue="" required className="input-field select-field">
                <option value="" disabled>
                  Objet de votre demande *
                </option>
                <option value="Demande d'information générale">Demande d'information générale</option>
                <option value="Demande de devis / Chiffrage projet">Demande de devis / Chiffrage projet</option>
                <option value="Suivi de dossier / Chantier en cours">Suivi de dossier / Chantier en cours</option>
                <option value="Études d'ingénierie & Conseil">Études d'ingénierie & Conseil</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            {/* Message */}
            <div className="input-group full-width textarea-group">
              <div className="input-icon textarea-icon">
                <FileText size={18} />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Expliquez-nous en détail votre demande ou votre projet..."
                required
                className="input-field textarea-field"
              ></textarea>
            </div>
          </>
        )}

        {/* ============================================================
            FORMULAIRE 2 : DEMANDE DE PARTENARIAT
            Champs : nom, entreprise, secteur, email pro, téléphone, type partenariat, détails
            Notification : partenariat@fidelesarl.com
            ============================================================ */}
        {mode === "partnership" && (
          <>
            {/* Nom du contact */}
            <div className="input-group">
              <div className="input-icon">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Nom du contact / Responsable *"
                required
                className="input-field"
              />
            </div>

            {/* Entreprise */}
            <div className="input-group">
              <div className="input-icon">
                <Building2 size={18} />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Nom de l'entreprise / Structure *"
                required
                className="input-field"
              />
            </div>

            {/* Secteur d'activité */}
            <div className="input-group">
              <div className="input-icon">
                <Layers size={18} />
              </div>
              <select name="sector" defaultValue="" required className="input-field select-field">
                <option value="" disabled>
                  Secteur d'activité *
                </option>
                <option value="BTP & Construction générale">BTP & Construction générale</option>
                <option value="Terrassement & Plateformes">Terrassement & Plateformes</option>
                <option value="Pavage & Voiries urbaines">Pavage & Voiries urbaines</option>
                <option value="Travaux de finition & Second œuvre">Travaux de finition & Second œuvre</option>
                <option value="Pistes rurales & Désenclavement">Pistes rurales & Désenclavement</option>
                <option value="Aménagement urbain & Espaces publics">Aménagement urbain & Espaces publics</option>
                <option value="Adduction d'eau potable (AEP)">Adduction d'eau potable (AEP)</option>
                <option value="Transport d'hydrocarbures">Transport d'hydrocarbures</option>
                <option value="Fournitures diverses & Équipements BTP">Fournitures diverses & Équipements BTP</option>
                <option value="Autre secteur">Autre secteur</option>
              </select>
            </div>

            {/* Email Professionnel */}
            <div className="input-group">
              <div className="input-icon">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="proEmail"
                placeholder="Email professionnel *"
                required
                className="input-field"
              />
            </div>

            {/* Téléphone */}
            <div className="input-group">
              <div className="input-icon">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone de contact *"
                required
                className="input-field"
              />
            </div>

            {/* Type de partenariat */}
            <div className="input-group">
              <div className="input-icon">
                <Briefcase size={18} />
              </div>
              <select name="partnershipType" defaultValue="" required className="input-field select-field">
                <option value="" disabled>
                  Type de partenariat visé *
                </option>
                <option value="Co-traitance sur marchés BTP">Co-traitance sur marchés BTP</option>
                <option value="Contrat cadre Fournisseur / Négoce">Contrat cadre Fournisseur / Négoce</option>
                <option value="Sous-traitance spécialisée">Sous-traitance spécialisée</option>
                <option value="Partenariat bureau d'études associé">Partenariat bureau d'études associé</option>
                <option value="Autre alliance stratégique">Autre alliance stratégique</option>
              </select>
            </div>

            {/* Détails de la proposition */}
            <div className="input-group full-width textarea-group">
              <div className="input-icon textarea-icon">
                <FileText size={18} />
              </div>
              <textarea
                name="details"
                rows={4}
                placeholder="Détails de votre proposition de partenariat (capacités, références récentes, zone d'intervention, ambitions communes...)"
                required
                className="input-field textarea-field"
              ></textarea>
            </div>
          </>
        )}

        {/* ============================================================
            FORMULAIRE 3 : DEMANDE D'EMPLOI
            Champs : nom, email, téléphone, poste, CV (upload), lettre, disponibilité
            Notification : emploi@fidelesarl.com avec CV en pièce jointe
            ============================================================ */}
        {mode === "career" && (
          <>
            {/* Nom */}
            <div className="input-group">
              <div className="input-icon">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet *"
                required
                className="input-field"
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <div className="input-icon">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                required
                className="input-field"
              />
            </div>

            {/* Téléphone */}
            <div className="input-group">
              <div className="input-icon">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone / WhatsApp *"
                required
                className="input-field"
              />
            </div>

            {/* Poste visé */}
            <div className="input-group">
              <div className="input-icon">
                <Briefcase size={18} />
              </div>
              <select name="position" defaultValue="" required className="input-field select-field">
                <option value="" disabled>
                  Poste visé *
                </option>
                <option value="Ingénieur Structure / Béton">Ingénieur Structure / Béton</option>
                <option value="Architecte / Designer BIM">Architecte / Designer BIM</option>
                <option value="Conducteur de travaux">Conducteur de travaux</option>
                <option value="Chef de chantier BTP">Chef de chantier BTP</option>
                <option value="Métreur / Chiffreur">Métreur / Chiffreur</option>
                <option value="Ingénieur VRD / Fluides">Ingénieur VRD / Fluides</option>
                <option value="Technicien HSE / Sécurité">Technicien HSE / Sécurité</option>
                <option value="Candidature spontanée">Candidature spontanée</option>
              </select>
            </div>

            {/* Disponibilité */}
            <div className="input-group full-width">
              <div className="input-icon">
                <Calendar size={18} />
              </div>
              <select name="availability" defaultValue="" required className="input-field select-field">
                <option value="" disabled>
                  Votre disponibilité *
                </option>
                <option value="Immédiate">Disponible immédiatement</option>
                <option value="Sous 1 mois">Disponible sous 1 mois (préavis)</option>
                <option value="Sous 2 mois">Disponible sous 2 mois</option>
                <option value="Sous 3 mois">Disponible sous 3 mois</option>
                <option value="À convenir">À convenir selon les projets</option>
              </select>
            </div>

            {/* CV Upload Dropzone */}
            <div className="input-group full-width">
              <div
                className={`cv-dropzone ${isDragging ? "is-dragging" : ""} ${selectedFile ? "has-file" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !selectedFile && fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  id="cv-upload-input"
                />

                {!selectedFile ? (
                  <div className="dropzone-content">
                    <div className="dropzone-icon">
                      <UploadCloud size={24} />
                    </div>
                    <div className="dropzone-text">
                      <strong>Téléversez votre CV (obligatoire pour notification RH) *</strong>
                      <span>Glissez-déposez votre fichier ici ou cliquez pour parcourir (PDF, DOC, DOCX — max 10 Mo)</span>
                    </div>
                  </div>
                ) : (
                  <div className="dropzone-file-preview">
                    <div className="file-info-badge">
                      <File size={20} className="file-icon" />
                      <div>
                        <strong className="file-name">{selectedFile.name}</strong>
                        <span className="file-size">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} Mo • Fichier prêt pour pièce jointe RH
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="remove-file-btn"
                      aria-label="Supprimer le fichier"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Lettre de motivation / Message */}
            <div className="input-group full-width textarea-group">
              <div className="input-icon textarea-icon">
                <FileText size={18} />
              </div>
              <textarea
                name="coverLetter"
                rows={3}
                placeholder="Lettre de motivation ou résumé de vos réalisations marquantes..."
                required
                className="input-field textarea-field"
              ></textarea>
            </div>
          </>
        )}

        {/* Submit Row */}
        <div className="form-submit-row">
          <Button variant="accent" type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Transmission en cours...</span>
            ) : (
              <>
                <span>
                  {mode === "general" && "Envoyer mon message"}
                  {mode === "partnership" && "Transmettre la demande de partenariat"}
                  {mode === "career" && "Déposer ma candidature (avec CV)"}
                </span>
                <Send size={16} />
              </>
            )}
          </Button>


        </div>
      </form>

      {/* Confirmation Visiteur */}
      {formSuccess && (
        <div className="form-success-banner" aria-live="polite">
          <CheckCircle2 size={24} className="success-icon" />
          <div className="success-banner-body">
            <div className="success-header-row">
              <strong>{formSuccess.title}</strong>
              <span className="success-email-tag">Destinataire : {formSuccess.targetEmail}</span>
            </div>
            <p>{formSuccess.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
