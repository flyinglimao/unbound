import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

export default function Volume() {
  return (
    <>
      <div className="relative h-72">
        <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(255,255,255,.4)] to-[rgba(0,0,0,.5)] w-full h-full"></div>
        <Image
          src="https://placehold.co/1920x288/000000/FFFFFF/png"
          alt="test"
          width={1920}
          height={288}
          className="w-full h-full object-cover"
        />
        <div className="absolute max-w-7xl top-0 left-1/2 -translate-x-1/2 w-full pl-4 pt-4 flex">
          <Link href="." className="text-white flex-0">
            <BsChevronLeft />
          </Link>
        </div>
      </div>
      <main className="relative max-w-7xl m-auto">
        <div className="-mt-48 flex gap-4 justify-center">
          <div className="lg:ml-24 p-1 shadow bg-white w-52">
            <Image
              src="https://placehold.co/210x297/000000/FFFFFF/png"
              alt="test"
              width={210}
              height={297}
            />
          </div>
          <h1 className="mt-34 text-shadow text-5xl text-white hidden lg:block flex-1">
            Test Book
            <br />
            <span className="text-4xl text-black">Volume Name</span>
          </h1>
        </div>
        <h1 className="mt-8 text-shadow text-5xl lg:hidden block flex-1 px-4 text-center">
          Test Book
          <br />
          <span className="text-4xl text-black">Volume Name</span>
        </h1>
        <div className="flex flex-col gap-8 max-w-3xl m-auto my-8 px-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
            ante, hendrerit vel magna vel, placerat dapibus neque. Suspendisse
            at justo aliquam lacus auctor imperdiet et a tellus. Sed et turpis
            ullamcorper, euismod lacus et, elementum sapien. Curabitur at
            maximus felis. Proin sed mollis nulla, in tempor mauris. Cras
            sagittis tellus sit amet blandit tempus. Nulla dignissim scelerisque
            enim. Proin ac massa id metus pellentesque convallis. Ut arcu urna,
            efficitur eu arcu sed, blandit vulputate nibh. In non nulla in
            turpis mattis tristique. Donec ultrices commodo quam, consectetur
            suscipit ligula vestibulum ac. Mauris sodales ante a eleifend
            vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            imperdiet nulla et nibh varius blandit. Pellentesque quis odio eu
            erat tincidunt lobortis. Quisque egestas pharetra arcu. Morbi
            accumsan, sapien in tempus condimentum, risus nisl facilisis dui,
            quis euismod ligula ex vel felis. Duis dignissim metus eget nunc
            congue consequat lobortis nec orci. Etiam aliquam arcu est, quis
            luctus metus tempor semper. Quisque augue urna, bibendum id aliquam
            non, porttitor nec neque. Maecenas placerat neque eget metus
            sollicitudin, eget molestie risus efficitur.
          </p>
          <p>
            Donec interdum laoreet nisi, in aliquet massa eleifend eu. Sed
            maximus facilisis erat, dapibus facilisis ipsum tristique at.
            Maecenas sit amet magna nunc. Nam a interdum libero. Proin
            sollicitudin eros vitae leo ultricies ultricies. Ut et purus vel
            justo fringilla suscipit sed quis erat. Nullam elementum, eros sed
            rhoncus mollis, felis diam molestie quam, nec luctus turpis metus at
            orci. Fusce quis enim quis purus vulputate placerat non eget ex.
            Cras fermentum magna eget porta tempus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Donec leo libero, laoreet porta auctor et, tincidunt a metus.
            Curabitur consectetur posuere mi, vitae viverra lorem convallis id.
            Nulla cursus id mi nec posuere. Etiam consectetur ut mauris eget
            condimentum.
          </p>
          <p>
            Etiam euismod odio quis ante suscipit commodo. Aliquam et tellus sit
            amet felis ornare pharetra. Mauris quis augue euismod, varius diam
            sit amet, pharetra nunc. Pellentesque sed eros ante. In hac
            habitasse platea dictumst. Nullam et luctus nibh, non euismod lorem.
            Quisque cursus sed odio et ornare. Vestibulum consectetur elit
            lectus, a aliquam nulla sagittis ac. In imperdiet enim in tincidunt
            congue.
          </p>
          <p>
            Praesent tortor erat, scelerisque sed elit id, ultrices imperdiet
            enim. Vestibulum ipsum nisl, fermentum sit amet lacinia eu, egestas
            vel ipsum. Sed sed est metus. Mauris ac interdum nisl. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Proin pharetra mattis justo, cursus cursus arcu
            vehicula non. Ut iaculis sit amet justo ut placerat. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus nec tellus interdum, ornare est sed, ullamcorper
            elit. Ut vestibulum urna sit amet nulla lobortis, non ultricies enim
            feugiat. Nullam dictum ac dui non aliquet. Morbi id imperdiet
            turpis, quis lacinia nisi. Nam maximus mattis magna a maximus.
          </p>
          <p>
            Quisque condimentum libero non felis laoreet, vitae lacinia nunc
            suscipit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Etiam at mi fringilla augue interdum
            sollicitudin. Aliquam erat volutpat. In eu magna augue. Ut rutrum
            urna at nulla posuere dignissim. Quisque et vehicula quam, eu cursus
            erat. Etiam eget tellus est. Etiam luctus nunc vitae porta tempor.
            Duis porta, tellus eget ultricies gravida, dui mi accumsan lorem,
            non blandit diam magna vel sem. Aenean porta ante nec nisl
            pellentesque ultrices. Mauris pulvinar blandit nunc at semper.
          </p>
          <p>
            Donec lacus lorem, porttitor eget sagittis eu, sodales ut orci.
            Aenean ut ante porttitor, rhoncus ante quis, consectetur lorem. Nunc
            purus ligula, egestas tristique accumsan nec, sagittis ac quam.
            Integer lacinia blandit purus, eu volutpat quam laoreet non. Aenean
            eget nibh vitae tellus varius mollis. Aenean vel accumsan ante.
            Nulla interdum turpis non mauris lacinia pretium. Sed vel dolor eget
            lectus sodales ultricies.
          </p>
          <p>
            Sed sodales consectetur metus, quis mattis lectus porttitor nec. Ut
            turpis sem, luctus at bibendum porttitor, posuere at neque. Cras a
            ante eget leo tristique placerat ac vitae leo. Maecenas aliquet eros
            ac felis blandit, eget porta nisl dictum. Integer eget lorem nec
            urna cursus tempus. Curabitur ipsum ipsum, gravida sed tristique a,
            pretium ac magna. Duis quis leo tortor. Etiam ut ante sit amet ante
            accumsan vestibulum. Etiam pharetra consequat augue.
          </p>
          <p>
            Fusce tempus felis lobortis, porttitor ante et, venenatis tellus.
            Nulla sagittis condimentum mollis. Proin maximus vitae nunc id
            mollis. Pellentesque gravida malesuada sem, eget commodo magna
            feugiat in. Ut porta nisi sit amet dolor vulputate, a suscipit
            mauris hendrerit. Curabitur eu tortor ultrices, malesuada nulla at,
            tincidunt turpis. Quisque sit amet nunc felis. Proin hendrerit nulla
            suscipit urna rhoncus, eget dapibus justo laoreet. Etiam lectus
            erat, euismod et sagittis eu, laoreet non urna.
          </p>
          <p>
            Donec eget efficitur nisl, nec efficitur mauris. Nulla placerat
            egestas tempus. Donec quis libero ut risus tempus venenatis. Mauris
            at ligula sit amet dolor porta scelerisque. Vivamus pellentesque leo
            in purus maximus, elementum pulvinar enim tincidunt. Vestibulum
            aliquam tortor lacus. Pellentesque faucibus tellus turpis, eu
            consectetur tortor consectetur at.
          </p>
          <p>
            Nam cursus magna a lacus vehicula, eget pulvinar libero faucibus.
            Cras in tellus ligula. Nulla consectetur eros ac augue posuere, in
            semper purus suscipit. Quisque sed convallis enim, sit amet placerat
            nulla. Duis nec scelerisque eros, ornare tempus tortor. Curabitur
            nisl turpis, viverra ac metus ut, faucibus interdum sem. Phasellus
            velit ligula, elementum consectetur hendrerit quis, finibus
            condimentum ante. Cras ut nibh felis. Aliquam sit amet elit mauris.
            Nunc ut orci sit amet urna efficitur tempus. Nulla imperdiet, neque
            id fringilla dictum, neque nulla dictum metus, quis pellentesque
            orci nunc quis risus.
          </p>
          <p>
            Pellentesque ut mi venenatis, mattis nulla vel, vulputate nisl. Ut a
            posuere nibh. In vehicula ante quis nulla dignissim euismod.
            Praesent pretium facilisis porttitor. Praesent id faucibus dui. Nam
            pharetra ligula vitae urna aliquet, at varius nisl posuere. Maecenas
            quis magna efficitur, luctus enim in, tincidunt risus. Praesent id
            diam nec metus consequat finibus. Sed metus leo, mattis ut commodo
            nec, fringilla quis odio. Morbi lobortis urna in lacinia posuere.
            Nulla facilisi. Duis nisi dolor, sollicitudin ac massa vitae,
            aliquet aliquet ex. Aliquam ac leo faucibus, eleifend odio a, semper
            diam. Nulla elementum tincidunt massa vel vulputate. Suspendisse ac
            mauris gravida, varius justo vel, tincidunt erat.
          </p>
        </div>
      </main>
    </>
  );
}
