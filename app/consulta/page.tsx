'use client';

import React, { CSSProperties, useEffect } from 'react';
import Layout from '@/components/Layout';

// const ContribuyenteDatos: React.FC = () => {
//   return (
//     <div className="my-4 w-full rounded-sm bg-white p-6 shadow-md">
//       <h2 className="mb-4 text-xl font-normal text-slate-950">
//         Datos de Contribuyente
//       </h2>
//       <p className="text-neutral-600">Name: John Doe</p>
//       <p className="text-neutral-600">Email: john.doe@example.com</p>
//       <p className="text-neutral-600">Contact Number: (123) 456-7890</p>
//     </div>
//   );
// };
//
// const PredioDatos: React.FC = () => {
//   return (
//     <div className="my-4 w-full rounded-sm bg-white p-6 shadow-md">
//       <h2 className="mb-4 text-xl font-normal text-slate-950">
//         Datos del Predio
//       </h2>
//       <p className="text-neutral-600">
//         Property ID: {Math.floor(Math.random() * 10000)}
//       </p>
//       <p className="text-neutral-600">
//         Address: 123 Example St, Example City, EX 12345
//       </p>
//       <p className="text-neutral-600">Property Type: Residential</p>
//     </div>
//   );
// };
//
// const MontoTotal: React.FC = () => {
//   return (
//     <div className="my-4  w-full rounded-sm bg-blue-500 p-4 text-neutral-50 shadow-md">
//       <h2 className="mb-2 text-xl font-normal">Total a Pagar</h2>
//       <p className="text-3xl font-semibold">$1000</p>
//       <small>()</small>
//     </div>
//   );
// };
//
// const ActionButtons: React.FC = () => {
//   return (
//     <div className="my-4 w-full flex-row justify-evenly space-y-2">
//       <button className="w-full rounded-sm bg-green-500 px-4 py-2 font-light text-white transition hover:bg-green-600">
//         Pagar
//       </button>
//       <button className="w-full rounded-sm bg-blue-500 px-4 py-2 font-light text-white transition hover:bg-blue-600">
//         Imprimir
//       </button>
//       <button className="w-full rounded-sm bg-red-500 px-4 py-2 font-light text-white transition hover:bg-red-600">
//         Salir
//       </button>
//     </div>
//   );
// };
//
// const ConsultaPage: React.FC = () => {
//   return (
//     <>
//       <Header doShow={false} />
//
//       <div className="container mx-auto px-4">
//         <div className="grid gap-4 lg:grid-cols-12">
//           <div className="lg:col-span-8">
//             <ContribuyenteDatos />
//             <PredioDatos />
//           </div>
//           <div className="lg:col-span-4">
//             <MontoTotal />
//             <ActionButtons />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default ConsultaPage;

interface Propiedad {
  claveCatastral: string;
  direccion: string;
  cuentaFolio: string;
  valorCatastral: string;
  superficieTerreno: number;
  superficieConstruccion: number;
  usoPredio: string;
}

interface Contribuyente {
  nombre: string;
  curp: string;
  rfc: string;
  domiciliofiscal: string;
}

interface ContentProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

const Content: React.FC<ContentProps> = ({ children, style }) => {
  return (
    <main
      style={{
        padding: '16px',
        backgroundColor: '#fff',
        flex: '1 0 auto',
        ...style,
      }}
    >
      {children}
    </main>
  );
};

interface RowProps {
  children?: ReactNode;
  gutter?: number;
}

export const Row: React.FC<RowProps> = ({ children, gutter = 0 }) => {
  const childrenWithStyle = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const styleWithGutter: CSSProperties = {
        marginRight: `${gutter / 2}px`,
        marginLeft: `${gutter / 2}px`,
        ...child.props.style,
      };

      return React.cloneElement(child, { style: styleWithGutter });
    }
    return child;
  });

  const rowStyle: CSSProperties = {
    display: 'flex',
    marginLeft: `${-gutter / 2}px`,
    marginRight: `${-gutter / 2}px`,
  };

  return <div style={rowStyle}>{childrenWithStyle}</div>;
};

interface ColProps {
  children?: React.ReactNode;
  span: number;
}

const Col: React.FC<ColProps> = ({ children, span }) => (
  <div style={{ flex: span }}>{children}</div>
);

interface CardProps {
  children?: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => (
  <div
    style={{
      border: '1px solid #eee',
      borderRadius: '4px',
      padding: '10px',
      margin: '10px',
    }}
  >
    <h2 style={{ marginBottom: '10px' }}>{title}</h2>
    {children}
  </div>
);

interface TitleProps {
  level: number;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: '#f0f2f5',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>Acuna</h1>
      <nav>
        <a href="#feature1">Feature 1</a>
        <a href="#feature2">Feature 2</a>
      </nav>
    </header>
  );
};

const ConsultaPage = () => {
  const [propiedad, setPropiedad] = React.useState<Propiedad | null>(null);
  const [contribuyente, setContribuyente] =
    React.useState<Contribuyente | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setPropiedad({
        claveCatastral: '1234567890',
        direccion: 'Calle 123, Colonia 456',
        cuentaFolio: '1234567890',
        valorCatastral: '$1,000,000.00',
        superficieTerreno: 100,
        superficieConstruccion: 100,
        usoPredio: 'Habitacional',
      });

      setContribuyente({
        nombre: 'Juan Perez',
        curp: 'PEJU000000HDFRRR00',
        rfc: 'PEJU000000HDFRRR00',
        domiciliofiscal: 'Calle 123, Colonia 456',
      });

      setLoading(false);
    }, 2000);
  }, []);

  const handlePrint = () => {
    console.log('Printin...');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Header>Predio</Header>
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={16}>
          <Col span={7}>
            <Card title="Informacion del Contribuyente">
              <Title level={5}>{contribuyente?.nombre}</Title>
              <p>{contribuyente?.domiciliofiscal}</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ConsultaPage;
