import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import { FaPhoneAlt, FaLocationArrow, FaRegClock } from "react-icons/fa";

const horarios = [
  {
    dia: "Lunes",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Martes",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Miercoles",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Jueves",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Viernes",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Sábado",
    horario: "8:00 a.m. - 6:00 p.m.",
  },
  {
    dia: "Domingo",
    horario: "8:00 a.m. - 12:00 p.m.",
  },
];

export const ContactSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Comunícate con nosotros</h1>

        <div className="info">
          <div className="contacto">
            <h3 className="contacto-title">Contacto</h3>
            <span>355 4487 4512</span>
            <a href="tel:4445 887 4556" itemProp="telephone">
              Llamanos
            </a>

            <span className="contacto-icon">
              <FaPhoneAlt />
            </span>
          </div>

          <div className="direccion">
            <h3 className="direccion-title">Dirección</h3>

            <span>Calle 5a #2 47</span>
            <span>La Plata - Huila Colombia</span>

            <a
              href="https://www.google.com/maps/dir//Agroconcentrados+Cipa/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3ad32716c2efd5:0x6e861e2adb580de8!2m2!1d-75.8900123!2d2.3891445"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>

            <span className="direccion-icon">
              <FaLocationArrow />
            </span>
          </div>

          <div className="horarios">
            <h3 className="horarios-title">Horarios de atención</h3>
            {horarios.map(({ dia, horario }) => (
              <span key={dia} className="horario-dia">
                {dia}: {horario}
              </span>
            ))}
            <span className="horarios-icon">
              <FaRegClock />
            </span>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media screen and (min-width: 830px) {
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }
  }

  .title {
    align-self: center;
    font-size: clamp(32px, 5vw, 42px);
  }

  .horarios,
  .contacto,
  .direccion {
    position: relative;
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    max-width: 350px;
    gap: 12px;
    padding: 25px;
    border: 1px solid #000;
    border-radius: 10px;

    .horarios-title,
    .contacto-title,
    .direccion-title {
      font-size: 25px;
      margin-bottom: 20px;
    }

    .horario-dia {
      font-size: 15px;
    }

    a {
      display: block;
      width: max-content;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 20px;
      text-decoration: none;
      color: #000;

      @media screen and (min-width: 830px) {
        &:hover {
          color: #0073bd;
          border-color: #0073bd;
        }
      }
    }
  }

  .contacto-icon,
  .direccion-icon,
  .horarios-icon {
    position: absolute;
    right: 20px;
    bottom: 20px;

    svg {
      font-size: 2rem;
      fill: #0073bd;
    }
  }
`;
