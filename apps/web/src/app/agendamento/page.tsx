import { SchedulingForm } from "../../components/scheduling-form";

export default function SchedulingPage() {
  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Autoatendimento</p>
          <h1>Agendamento inicial do paciente</h1>
        </div>
        <a href="/" className="secondary">
          Voltar para a visao geral
        </a>
      </section>
      <SchedulingForm />
    </main>
  );
}

