import { useEffect, useState } from "react"
import fallbackImg from "../../../../assets/images/profile.jpg"

const imgStyle = { width: "100%", borderRadius: 8 }

// very small markdown to HTML converter for headings, bold, italics, links, code, lists
function mdToHtml(markdown) {
  if (!markdown) return ""
  let html = markdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
  // code blocks ```
  html = html.replace(/```([\s\S]*?)```/g, (m, p1) => `<pre style=\"background:#0b1020;color:#e2e8f0;padding:10px;border-radius:6px;overflow:auto\">${p1}</pre>`)
  // inline code
  html = html.replace(/`([^`]+)`/g, '<code style="background:#f1f5f9;padding:2px 4px;border-radius:4px">$1</code>')
  // headings
  html = html.replace(/^######\s?(.*)$/gm, '<h6>$1</h6>')
             .replace(/^#####\s?(.*)$/gm, '<h5>$1</h5>')
             .replace(/^####\s?(.*)$/gm, '<h4>$1</h4>')
             .replace(/^###\s?(.*)$/gm, '<h3>$1</h3>')
             .replace(/^##\s?(.*)$/gm, '<h2>$1</h2>')
             .replace(/^#\s?(.*)$/gm, '<h1>$1</h1>')
  // bold/italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
             .replace(/\*([^*]+)\*/g, '<em>$1</em>')
  // links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1<\/a>')
  // unordered lists
  html = html.replace(/^(?:-\s.*(?:\n|$))+?/gm, (block) => {
    const items = block.trim().split(/\n/).map(l => l.replace(/^-\s?/, '').trim()).filter(Boolean)
    if (!items.length) return block
    return `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`
  })
  // paragraphs
  html = html.replace(/^(?!<h\d|<ul|<pre|<code|<li|<\/|\s*$)(.+)$/gm, '<p>$1</p>')
  return html
}

const MarkdownBlock = ({ src, title }) => {
  const [text, setText] = useState("")
  useEffect(() => {
    let cancelled = false
    if (!src) return
    fetch(src)
      .then((r) => r.text())
      .then((t) => { if (!cancelled) setText(t) })
      .catch(() => setText("") )
    return () => { cancelled = true }
  }, [src])

  if (!src || !text) return null
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>{title}</h4>
      <div
        style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 6, padding: "0.75rem", lineHeight: 1.65 }}
        dangerouslySetInnerHTML={{ __html: mdToHtml(text) }}
      />
    </div>
  )
}

const CalendarAppDetail = ({ project }) => {
  const images = project.images || []
  const captions = project.imageCaptions || []

  return (
    <div style={{ paddingBottom: "2rem" }}>
      {images.length > 0 ? (
        <img src={images[0]} alt={project.title} style={{ width: "100%", maxHeight: 720, objectFit: "contain", marginBottom: "0.5rem" }} />
      ) : (
        <img src={fallbackImg} alt={project.title} style={{ width: "100%", maxHeight: 720, objectFit: "contain", marginBottom: "0.5rem" }} />
      )}
      {/* Remove hero caption under the first image */}

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Highlights above gallery */}
      <div style={{ marginTop: "1.5rem" }}>
        <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Highlights</h4>
        <ul style={{ textAlign: "left", marginLeft: "1.5rem", lineHeight: 1.6 }}>
          <li><strong>Designed with MVC (Model–View–Controller) and Command patterns</strong> for clear separation of concerns and easy maintainability.</li>
          <li><strong>Comprehensive testing for Model, View, Controller, and Command layers</strong> ensures reliability (over 300 tests).</li>
          <li>Provides Day, Week, and Month views, as well as a schedule list, with optimized keyboard and mouse interactions.</li>
          <li>Supports event creation, editing, and deletion dialogs with time, location, and description input.</li>
        </ul>
      </div>

      {/* Gallery includes ALL images (including first) */}
      {images.length > 0 && (
        <>
          <h4 style={{ marginTop: "1rem", marginBottom: "0.5rem", color: "#0ea5e9" }}>Gallery</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: "1rem" }}>
            {images.map((src, idx) => (
              <figure key={src} style={{ margin: 0 }}>
                <img src={src} alt="Calendar screenshot" style={{ ...imgStyle, maxHeight: 520, objectFit: "contain" }} />
                {captions[idx] && (
                  <figcaption style={{ fontSize: 14, color: "#475569", textAlign: "center", marginTop: 6 }}>
                    {captions[idx]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </>
      )}

      {/* USEME moved to bottom */}
      {project.useme && <MarkdownBlock src={project.useme} title="USEME" />}
    </div>
  )
}

export default CalendarAppDetail
