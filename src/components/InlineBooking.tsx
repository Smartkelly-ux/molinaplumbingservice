import React, { useState } from 'react';

export const InlineBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
    preferredDay: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.problem.trim()) {
      newErrors.problem = 'Please briefly describe what plumbing issue you have.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Generate dispatch request ticket
      const id = 'MOL-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(id);
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', problem: '', preferredDay: '' });
    setSubmitted(false);
  };

  return (
    <section
      id="booking"
      className="w-full bg-[#F4F5F2] py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#DCE4E1]"
      aria-label="Request Service Area"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left 35%: Information (Spans 4 cols on desktop) */}
        <div className="lg:col-span-4 space-y-3 sm:space-y-4">
          <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>DIRECT INLINE DISPATCH</span>
          </div>

          <h2 className="text-[28px] min-[360px]:text-[34px] min-[420px]:text-[38px] sm:text-[44px] md:text-[50px] lg:text-[62px] leading-[0.98] font-normal tracking-[-0.03em] text-[#161B19]">
            NEED HELP?
          </h2>

          <p className="text-sm sm:text-base text-[#46524E] max-w-sm pt-1">
            Tell us what is going on.
          </p>

          <div className="pt-6 sm:pt-8 border-t border-[#DCE4E1] mt-6 sm:mt-8">
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#8A9691]">IMMEDIATE EMERGENCIES</div>
            <p className="text-xs text-[#46524E] mt-1 mb-2 leading-relaxed">
              For active flooding or sudden line bursts, direct phone call is fastest.
            </p>
            <a
              href="tel:7867931122"
              className="phone-motion font-mono text-base font-semibold text-[#183635]"
            >
              (786) 793-1122
            </a>
          </div>
        </div>

        {/* Right 65%: Form (Spans 8 cols on desktop) */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="bg-[#FAFBF9] border border-[#DCE4E1] p-8 sm:p-12 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase text-[#183635]">
                <span className="w-2 h-2 bg-[#C56D4C]" />
                DISPATCH REQUEST REGISTERED
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8A9691]">
                  REFERENCE: {referenceId}
                </div>
                <h3 className="text-2xl font-light text-[#161B19]">
                  Thank you, {formData.name}.
                </h3>
                <p className="text-sm text-[#46524E] leading-relaxed">
                  We have received your service request for: <strong className="text-[#161B19] font-medium">{formData.problem}</strong>. A technician will contact you at <strong className="text-[#161B19] font-medium">{formData.phone}</strong> promptly.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE4E1] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="link-motion text-xs font-semibold tracking-[0.16em] uppercase text-[#46524E] hover:text-[#183635]"
                >
                  SUBMIT ANOTHER REQUEST
                </button>

                <a
                  href="tel:7867931122"
                  className="btn-motion px-6 py-2.5 bg-[#183635] text-[#FAFBF9] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#161B19]"
                >
                  CALL NOW: (786) 793-1122
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Form Inputs with Bottom-Border Design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* NAME */}
                <div className="relative group">
                  <label
                    htmlFor="client-name"
                    className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#46524E] mb-1"
                  >
                    NAME *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or business"
                    className="w-full bg-transparent border-b border-[#46524E]/40 focus:border-[#C56D4C] text-base text-[#161B19] py-2 outline-none transition-colors placeholder:text-[#8A9691]/60"
                  />
                  {errors.name && (
                    <span className="block text-xs text-[#C56D4C] mt-1">{errors.name}</span>
                  )}
                </div>

                {/* PHONE */}
                <div className="relative group">
                  <label
                    htmlFor="client-phone"
                    className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#46524E] mb-1"
                  >
                    PHONE *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(786) 000-0000"
                    className="w-full bg-transparent border-b border-[#46524E]/40 focus:border-[#C56D4C] text-base text-[#161B19] py-2 outline-none transition-colors font-mono placeholder:font-sans placeholder:text-[#8A9691]/60"
                  />
                  {errors.phone && (
                    <span className="block text-xs text-[#C56D4C] mt-1">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* PROBLEM */}
              <div className="relative group">
                <label
                  htmlFor="client-problem"
                  className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#46524E] mb-1"
                >
                  PROBLEM *
                </label>
                <input
                  id="client-problem"
                  type="text"
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="e.g. Under-sink leak, clogged main line, water heater no hot water"
                  className="w-full bg-transparent border-b border-[#46524E]/40 focus:border-[#C56D4C] text-base text-[#161B19] py-2 outline-none transition-colors placeholder:text-[#8A9691]/60"
                />
                {errors.problem && (
                  <span className="block text-xs text-[#C56D4C] mt-1">{errors.problem}</span>
                )}
              </div>

              {/* PREFERRED DAY (Optional) */}
              <div className="relative group max-w-sm">
                <label
                  htmlFor="client-day"
                  className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#46524E] mb-1"
                >
                  PREFERRED DAY <span className="text-[#8A9691] font-normal">(OPTIONAL)</span>
                </label>
                <input
                  id="client-day"
                  type="text"
                  value={formData.preferredDay}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                  placeholder="e.g. Today / Tomorrow morning / Saturday"
                  className="w-full bg-transparent border-b border-[#46524E]/40 focus:border-[#C56D4C] text-base text-[#161B19] py-2 outline-none transition-colors placeholder:text-[#8A9691]/60"
                />
              </div>

              {/* Submit Button & Call Link */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <button
                  type="submit"
                  className="btn-motion group relative inline-flex items-center justify-center px-10 py-4 bg-[#183635] text-[#FAFBF9] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#161B19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183635]"
                >
                  <span>REQUEST SERVICE</span>
                  {/* Copper underline sliding beneath text on hover */}
                  <span className="absolute bottom-2 left-10 right-10 h-[1.5px] bg-[#C56D4C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                <div className="text-left sm:text-right">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#8A9691]">OR CALL</div>
                  <a
                    href="tel:7867931122"
                    className="phone-motion font-mono text-base font-semibold text-[#183635]"
                  >
                    (786) 793-1122
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
