import GeneralButton from "../Buttons/ButtonGeneral";
import Styles from "@/app/components/Styles/Contactform.module.css";

export default function ContactForm() {
  return (
    <div id="contact" className={Styles.div}>
      <div
        style={{
          margin: "0px",
          paddingRight: "22px",
        }}
      >
        <form style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div className={Styles.thirdDiv}>
            <div style={{ flex: 1, margin: "0 10px" }}>
              <label style={{ color: "#2C3E50", marginBottom: "10px" }}>
                First Name <span style={{ color: "#E74C3C " }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Muhammad"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid rgba(204, 204, 204, 0.5)",
                  marginBottom: "20px",
                  opacity: "0.7",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ flex: 1, margin: "0 10px" }}>
              <label style={{ color: "#2C3E50", marginBottom: "10px" }}>
                Last Name <span style={{ color: "#E74C3C" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Ahmed"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid rgba(204, 204, 204, 0.5)",
                  marginBottom: "20px",
                  opacity: "0.7",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div className={Styles.thirdDiv}>
            <div style={{ flex: 1, margin: "0 10px" }}>
              <label style={{ color: "#2C3E50", marginBottom: "10px" }}>
                Email <span style={{ color: "#E74C3C" }}>*</span>
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid rgba(204, 204, 204, 0.5)",
                  marginBottom: "20px",
                  opacity: "0.7",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ flex: 1, margin: "0 10px" }}>
              <label style={{ color: "#2C3E50", marginBottom: "10px" }}>
                Phone <span style={{ color: "#E74C3C" }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="+92 300 1234567"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid rgba(204, 204, 204, 0.5)",
                  marginBottom: "20px",
                  opacity: "0.7",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <label style={{ color: "#2C3E50", marginBottom: "10px" }}>
              How could I help you? <span style={{ color: "#E74C3C" }}>*</span>
            </label>
            <textarea
              placeholder="Describe your issue or inquiry..."
              maxLength={1000}
              required
              rows={8}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid rgba(204, 204, 204, 0.5)",
                resize: "none",
                opacity: "0.7",
                outline: "none",
              }}
            ></textarea>
          </div>

          <div style={{ marginTop: "20px", paddingLeft: "10px" }}>
            <GeneralButton title="Submit Request" />
          </div>
        </form>
      </div>
    </div>
  );
}
