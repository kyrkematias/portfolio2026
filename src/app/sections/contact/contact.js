"use client";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaBehance } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (values) => {
    const tempErrors = {};
    if (!values.name.trim()) {
      tempErrors.name = "El nombre completo es obligatorio.";
    } else if (values.name.trim().length < 3) {
      tempErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      tempErrors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(values.email)) {
      tempErrors.email = "El formato de correo electrónico no es válido.";
    }

    if (!values.subject.trim()) {
      tempErrors.subject = "El asunto es obligatorio.";
    } else if (values.subject.trim().length < 4) {
      tempErrors.subject = "El asunto debe tener al menos 4 caracteres.";
    }

    if (!values.message.trim()) {
      tempErrors.message = "El mensaje es obligatorio.";
    } else if (values.message.trim().length < 10) {
      tempErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => {
      const updated = { ...prev, [name]: val };
      if (errors[name]) {
        const validationErrors = validate(updated);
        setErrors((prevErrors) => {
          const next = { ...prevErrors };
          if (validationErrors[name]) {
            next[name] = validationErrors[name];
          } else {
            delete next[name];
          }
          return next;
        });
      }
      return updated;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = validate(formData);
    setErrors((prev) => {
      if (validationErrors[name]) {
        return { ...prev, [name]: validationErrors[name] };
      } else {
        const next = { ...prev };
        delete next[name];
        return next;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botcheck) return; // SPAM bot detection

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setStatusMessage("Por favor, corrige los errores en el formulario.");
      return;
    }

    setErrors({});
    setStatus("loading");
    setStatusMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    if (!accessKey || accessKey === "your_web3forms_access_key_here") {
      setStatus("error");
      setStatusMessage(
        "Clave de acceso no configurada. Por favor, añade tu clave de Web3Forms en tu archivo de configuración (.env.local)."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botcheck: false,
        });
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("No se pudo conectar con el servidor. Revisa tu conexión a internet.");
    }
  };

  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-16 md:py-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 w-fit">
          CONTACTO
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
          ¿Tienes un proyecto en mente, buscas mejorar el posicionamiento de tu negocio o quieres conversar sobre desarrollo frontend? Escríbeme y hablemos sobre cómo podemos trabajar juntos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Columna de Información */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white tracking-wide">
                Información de contacto
              </h3>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                Completa el formulario para enviar un correo directamente a mi bandeja de entrada. Responderé a la brevedad posible para agendar una llamada.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-[#161725] rounded-lg border border-[#2c2f3a]">
                    <Mail className="text-pink-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                    <a href="mailto:tuemail@dominio.com" className="text-sm sm:text-base hover:text-cyan-400 transition-colors duration-200">
                      tuemail@dominio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-[#161725] rounded-lg border border-[#2c2f3a]">
                    <MapPin className="text-blue-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Ubicación</p>
                    <p className="text-sm sm:text-base">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-6 border-t border-[#2c2f3a] space-y-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Redes Profesionales
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:scale-105">
                    <div className="bg-[#0e0f1a] rounded-full p-3 text-white text-xl flex items-center justify-center">
                      <FaGithub />
                    </div>
                  </div>
                </a>
                <a
                  href="https://behance.net/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:scale-105">
                    <div className="bg-[#0e0f1a] rounded-full p-3 text-white text-xl flex items-center justify-center">
                      <FaBehance />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="lg:col-span-7">
            <div className="bg-[#121324] border border-[#2c2f3a] rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              {/* Efecto Glow sutil en la esquina superior derecha */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={formData.botcheck}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Juan Pérez"
                      className={`w-full bg-[#161725] border rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                        errors.name
                          ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-[#2c2f3a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-rose-500 text-xs mt-1.5 block font-light">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="juan@correo.com"
                      className={`w-full bg-[#161725] border rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                        errors.email
                          ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-[#2c2f3a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-rose-500 text-xs mt-1.5 block font-light">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Consulta de presupuesto, propuesta laboral..."
                    className={`w-full bg-[#161725] border rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                      errors.subject
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                        : "border-[#2c2f3a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-rose-500 text-xs mt-1.5 block font-light">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Escribe tu mensaje aquí detallando los requerimientos de tu proyecto..."
                    className={`w-full bg-[#161725] border rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 resize-none ${
                      errors.message
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                        : "border-[#2c2f3a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-rose-500 text-xs mt-1.5 block font-light">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Mensajes de Estado */}
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-sm text-sm">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-sm text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{statusMessage}</p>
                  </div>
                )}

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-center flex items-center justify-center gap-2 rounded-sm px-6 py-4 text-sm font-semibold text-black bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      ENVIAR MENSAJE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
