interface SVGProps {
    color: string;
}

export function IconCube( { color }: SVGProps ) {
    return (
        <svg width="40" height="45" viewBox="0 0 40 45" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path d="M2.54 11.8822L20 21.9547L37.46 11.8822M20 42.04V21.9348M38 29.913V13.9565C37.9993 13.257 37.8141 12.5699 37.4631 11.9643C37.112 11.3586 36.6075 10.8557 36 10.5059L22 2.52766C21.3919 2.17754 20.7021 1.99322 20 1.99322C19.2979 1.99322 18.6081 2.17754 18 2.52766L4 10.5059C3.39253 10.8557 2.88796 11.3586 2.53692 11.9643C2.18589 12.5699 2.00072 13.257 2 13.9565V29.913C2.00072 30.6126 2.18589 31.2996 2.53692 31.9053C2.88796 32.5109 3.39253 33.0139 4 33.3636L18 41.3419C18.6081 41.692 19.2979 41.8763 20 41.8763C20.7021 41.8763 21.3919 41.692 22 41.3419L36 33.3636C36.6075 33.0139 37.112 32.5109 37.4631 31.9053C37.8141 31.2996 37.9993 30.6126 38 29.913Z" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export function IconStack( { color }: SVGProps ) {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path d="M2 32L22 42L42 32M2 22L22 32L42 22M22 2L2 12L22 22L42 12L22 2Z" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function IconCommand( { color }: SVGProps ) {
    return (
        <svg width="40" height="41" viewBox="0 0 40 41" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path d="M32 2.9837C30.4087 2.9837 28.8826 3.61412 27.7574 4.73628C26.6321 5.85844 26 7.38042 26 8.96739V32.9022C26 34.4891 26.6321 36.0111 27.7574 37.1333C28.8826 38.2554 30.4087 38.8859 32 38.8859C33.5913 38.8859 35.1174 38.2554 36.2426 37.1333C37.3679 36.0111 38 34.4891 38 32.9022C38 31.3152 37.3679 29.7932 36.2426 28.6711C35.1174 27.5489 33.5913 26.9185 32 26.9185H8C6.4087 26.9185 4.88258 27.5489 3.75736 28.6711C2.63214 29.7932 2 31.3152 2 32.9022C2 34.4891 2.63214 36.0111 3.75736 37.1333C4.88258 38.2554 6.4087 38.8859 8 38.8859C9.5913 38.8859 11.1174 38.2554 12.2426 37.1333C13.3679 36.0111 14 34.4891 14 32.9022V8.96739C14 7.38042 13.3679 5.85844 12.2426 4.73628C11.1174 3.61412 9.5913 2.9837 8 2.9837C6.4087 2.9837 4.88258 3.61412 3.75736 4.73628C2.63214 5.85844 2 7.38042 2 8.96739C2 10.5544 2.63214 12.0763 3.75736 13.1985C4.88258 14.3207 6.4087 14.9511 8 14.9511H32C33.5913 14.9511 35.1174 14.3207 36.2426 13.1985C37.3679 12.0763 38 10.5544 38 8.96739C38 7.38042 37.3679 5.85844 36.2426 4.73628C35.1174 3.61412 33.5913 2.9837 32 2.9837Z" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
