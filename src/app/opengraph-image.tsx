import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Djondzo Escolar — Sistema de Gestão Escolar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172B",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "58px",
              height: "58px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              background: "#155DFC",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "21px",
                width: "19px",
                height: "23px",
                borderRadius: "10px 2px 8px 10px",
                background: "#C7D2FE",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "10px",
                top: "21px",
                width: "19px",
                height: "23px",
                borderRadius: "2px 10px 10px 8px",
                background: "#757DF5",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "27px",
                top: "9px",
                width: "5px",
                height: "5px",
                borderRadius: "999px",
                background: "#C7D2FE",
              }}
            />
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800 }}>Djondzo</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "950px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: "-2px",
            }}
          >
            A escola inteira, ligada no mesmo sistema.
          </div>
          <div style={{ marginTop: "28px", fontSize: "24px", color: "#C7D2FE" }}>
            Gestão académica, administrativa e financeira para escolas.
          </div>
        </div>

        <div style={{ fontSize: "20px", color: "#8DA0BB" }}>djondzo.co.mz</div>
      </div>
    ),
    size,
  );
}
