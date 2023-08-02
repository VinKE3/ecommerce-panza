import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categorias</h3>
            <Link className="hover:text-slate-400" href="#">
              Teléfonos
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Electrodomesticos
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Casa y Hogar
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Jardin
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Terraza
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Herramientas
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Atención al Cliente</h3>
            <Link className="hover:text-slate-400" href="#">
              Contactanos
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Política de Privacidad
            </Link>
            <Link className="hover:text-slate-400" href="#">
              Reembolsos y Devoluciones
            </Link>
            <Link className="hover:text-slate-400" href="#">
              FAQs
            </Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Nosotros</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptatem
              consequuntur quos voluptate quas quibusdam, quia, quod voluptates
              voluptatem consequuntur quos voluptate quas
            </p>
            <p>
              © {new Date().getFullYear()} E~Shop. Todos los derechos
              reservados.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Redes Sociales</h3>
            <div className="flex gap-2">
              <Link className="hover:text-slate-400" href="#">
                <BsFacebook size={24} />
              </Link>
              <Link className="hover:text-slate-400" href="#">
                <BsInstagram size={24} />
              </Link>
              <Link className="hover:text-slate-400" href="#">
                <BsTwitter size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
