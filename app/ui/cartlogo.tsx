import Image from 'next/image'
export default function CartLogo() {
    return (
        <Image
            src="/cart.png"
            alt="Logo"
            width={10}
            height={15}
        />
    );
}