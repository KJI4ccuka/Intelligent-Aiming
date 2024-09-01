import { DISCORD } from '@/config'
import { cn } from '@/lib/utils'

const DiscordButton = ({ className, classnameSvg }) => {
  return (
    <a href={DISCORD.href} target="_blank" className={cn("flex mx-4 p-2.5 bg-[#5865F2] items-center cursor-pointer px-4 justify-center transition transform hover:scale-105 gap-2  text-foreground border border-secondary hover:border-white/20 rounded-md shadow-sm xs:p-4", className)}>
      <img
        className={cn(classnameSvg, "max-w-6 transition-all sm:max-w-10")}
        width={classnameSvg}
        height={classnameSvg}
        src="/images/icons/discord.svg"
        alt="discord icon"
      />
      <span className={cn('')}>
      {DISCORD.label}
      </span>
    </a>
  );
};

export default DiscordButton