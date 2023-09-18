import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import bcrypt from 'bcryptjs';
export const authOptions={
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{},
            async authorize(credentials){
                const {email,password}=credentials
                try {
                   await connectMongoDB();
                   const user=await User.findOne({email});
                    if(!user){
                        return null
                    }
                    const passwordMatch=await bcrypt.compare(password, user.password);
                    if(!passwordMatch){
                        return null
                    } 
                    return user;
                } catch (error) {
                    console.log('error', error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if(user) token.role = user.role
          return token
        },
       async session({ session, token }) {
          session.user.role = token.role
          return session
        }
      },
    session:{
        strategy:'jwt',
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'/login',
    }
};

const handler=NextAuth(authOptions);
export {handler as GET, handler as POST}

