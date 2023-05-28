import { Nome } from './styles';
import axios from 'axios';

export default async function Home() {
  const response = await axios.get('https://api.github.com/users/ruteski');
  const user = response.data;

  return (
    <h1>
      Bem vindo - <Nome>{user.name}</Nome>{' '}
    </h1>
  );
}
