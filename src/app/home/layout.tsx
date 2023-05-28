import { ReactNode } from 'react';
import { Container } from './styles';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    // <div
    //   style={
    //     {
    //        display: 'flex',
    //        width: '100%',
    //        maxWidth: '28rem',
    //        backgroundColor: 'blue'
    //     }
    //   }
    // >
    //   <>{children}</>
    // </div>
    <Container>{children}</Container>
  );
}
