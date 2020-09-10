import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Spotify({
      clientId: '561b6c3b0b5946709cd1805152dd1ec2',
      clientSecret: '4b61bb9dde0b4e589957333a5ca4b77a'
    })
  ],
  database: 'mongodb+srv://pebblo:drhvdrQ7WcCeVAHs@cluster0-jucev.gcp.mongodb.net/pebblo?retryWrites=true&w=majority'
}

export default (req, res) => NextAuth(req, res, options);