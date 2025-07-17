import MainButton , {SecondaryButton} from "./button"

type StatItemProps = {
    value: string;
    description: string;
};

const StatItem = ({ value, description }: StatItemProps) => (
    <div>
        <p className="text-[#19B7A5] font-normal text-3xl">{value}</p>
        <p className="text-[#9CA3AF] text-base">{description}</p>
    </div>
);

function HeroSection() {
    const statsData = [
        {value: "40%", description: "Economies d'énérgie"},
        {value: "5min", description: "Temps d'Installation"},
        {value: "24/7", description: "Contrôle Intelligent"},
    ];
    return (
        <>
            <div className="bg-[url('./assets/background.jpg')] bg-cover bg-center w-full">
                <div className="flex flex-col items-center text-white justify-center h-screen bg-[linear-gradient(135deg,#0F172AAA_0%,#1E293BAA_50%,#0F172A_100%)] w-full">
                    <h1 className="font-bold text-[96px] leading-[96px] py-1.5">Tranon'AI</h1>
                    <p className="text-3xl leading-[36px] py-1">Chez vous même quand vous n'y êtes pas</p>
                    <p className="font-normal text-xl text-center text-[#9CA3AF] py-2.5">Transformez votre maison malgache en un écosystème intelligent. <br /> Contrôlez tous d'un simple geste, réduisez vos coûts énergétiques de 40% et adoptez l'avenir d'un mode de vie durable.</p>
                    <div className="flex gap-[1rem] my-3.5">
                        <MainButton>Passez à la maison connecté</MainButton>
                        <SecondaryButton>Regarder la démo</SecondaryButton>
                    </div>
                    <div className="flex text-center justify-center gap-x-36 my-7 py-2 w-full max-w-5xl mx-auto">
                        {statsData.map(({ value, description }) => (
                            <StatItem key={value} value={value} description={description} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection