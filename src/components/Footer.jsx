export default function Footer({text, year}) {
    return (
        <div style={{backgroundColor: 'pink', padding: '20px', textAlign: "center", bottom: "0", position: "fixed", width: "100%"}}>
           {text} {year}
        </div>
    )
} 