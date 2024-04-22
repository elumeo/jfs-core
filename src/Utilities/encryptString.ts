import { JSEncrypt } from 'jsencrypt';

export default async (plainText: string, publicKey: string): Promise<string> => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(plainText);
  if (encrypted === false) {
    throw new Error('Encryption failed');
  }
  return encrypted;
}
