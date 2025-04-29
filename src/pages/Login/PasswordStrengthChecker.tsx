import { useState } from "react";
import { ShieldAlert, ShieldCheck, Shield, AlertTriangle } from "lucide-react";


interface PasswordStrengthCheckerProps {
  password: string;
  confirmPassword: string;
  setPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
}

const translations = {
  en: {
    placeholder: "Enter your password",
    strengthLabel: "Password strength",
    tipsTitle: "Tips to improve:",
    tips: {
      minLength: "Use at least 8 characters",
      upperCase: "Add an uppercase letter",
      number: "Include a number",
      specialChar: "Use a special character (e.g., !@#$)",
    },
    levels: {
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
    },
  },
  pt: {
    placeholder: "Digite sua senha",
    strengthLabel: "Força da senha",
    tipsTitle: "Dicas para melhorar:",
    tips: {
      minLength: "Use pelo menos 8 caracteres",
      upperCase: "Adicione uma letra maiúscula",
      number: "Inclua um número",
      specialChar: "Use um caractere especial (ex: !@#$)",
    },
    levels: {
      weak: "Fraca",
      medium: "Média",
      strong: "Forte",
    },
  },
  fr: {
    placeholder: "Entrez votre mot de passe",
    strengthLabel: "Solidité du mot de passe",
    tipsTitle: "Conseils pour améliorer :",
    tips: {
      minLength: "Utilisez au moins 8 caractères",
      upperCase: "Ajoutez une lettre majuscule",
      number: "Incluez un chiffre",
      specialChar: "Utilisez un caractère spécial (ex: !@#$)",
    },
    levels: {
      weak: "Faible",
      medium: "Moyenne",
      strong: "Forte",
    },
  },
};

const currentLanguage = 'en';

const PasswordStrengthChecker = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}: PasswordStrengthCheckerProps) => {
  const t = translations[currentLanguage];
  const [strength, setStrength] = useState(0);
  const [tips, setTips] = useState<string[]>([]);
  const [matchError, setMatchError] = useState(false);

  const evaluateStrength = (password: string) => {
    let points = 0;
    const newTips: string[] = [];

    if (password.length >= 8) {
      points++;
    } else {
      newTips.push(t.tips.minLength);
    }
    if (/[A-Z]/.test(password)) {
      points++;
    } else {
      newTips.push(t.tips.upperCase);
    }
    if (/[0-9]/.test(password)) {
      points++;
    } else {
      newTips.push(t.tips.number);
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      points++;
    } else {
      newTips.push(t.tips.specialChar);
    }

    setStrength(points);
    setTips(newTips);
  };

  const getStrengthLabel = () => {
    switch (strength) {
      case 1:
        return t.levels.weak;
      case 2:
      case 3:
        return t.levels.medium;
      case 4:
        return t.levels.strong;
      default:
        return "";
    }
  };

  const getProgressColor = () => {
    switch (strength) {
      case 1:
        return "bg-red-500";
      case 2:
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const getIcon = () => {
    switch (strength) {
      case 1:
        return <ShieldAlert className="text-red-500" size={20} />;
      case 2:
      case 3:
        return <Shield className="text-yellow-500" size={20} />;
      case 4:
        return <ShieldCheck className="text-green-500" size={20} />;
      default:
        return null;
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    evaluateStrength(value);
    if (confirmPassword) {
      setMatchError(value !== confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setMatchError(password !== value);
  };

  return (
    <div className="flex flex-col gap-1 max-w-md">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder={t.placeholder}
        className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirme sua senha"
        className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {matchError && (
        <div className="flex items-center gap-2 text-red-500 text-sm font-semibold">
          <AlertTriangle size={18} />
          Senhas não coincidem.
        </div>
      )}

      <div className="h-3 w-full bg-gray-300 rounded overflow-hidden">
        <div
          className={`h-3 ${getProgressColor()} rounded transition-all duration-500`}
          style={{ width: `${(strength / 4) * 100}%` }}
        ></div>
      </div>

      {strength > 0 && (
        <div className="flex items-center gap-2">
          {getIcon()}
          <span
            className={`text-sm font-semibold ${
              strength === 1
                ? "text-red-500"
                : strength === 2 || strength === 3
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {t.strengthLabel}: {getStrengthLabel()}
          </span>
        </div>
      )}

      {tips.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1 font-semibold">
            {t.tipsTitle}
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;