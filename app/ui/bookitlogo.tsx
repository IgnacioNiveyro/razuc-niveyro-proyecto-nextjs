import Image from 'next/image'
export default function BookitLogo() {
    return (
        <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={35}
            className="h-35 w-30 ml-2"
        />
    );
}
