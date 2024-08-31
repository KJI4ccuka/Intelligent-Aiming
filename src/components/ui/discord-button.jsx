import { DISCORD } from '@/config'
import { cn } from '@/lib/utils'

const DiscordButton = ({ className }) => {
  return (
    <a href={DISCORD.href} target="_blank" className={cn("flex mx-4 p-2.5 bg-[#5865F2] items-center cursor-pointer px-4 justify-center transition transform hover:scale-105 gap-2  text-foreground border border-secondary hover:border-white/20 rounded-md shadow-sm xs:p-4", className)}>
      <img
        className="max-w-6 transition-all  sm:max-w-10"
        width={30}
        height={30}
        src="/images/icons/discord.svg"
        alt="discord icon"
      />
      {DISCORD.label}
    </a>
  );
};

export default DiscordButton